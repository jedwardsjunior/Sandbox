import wikipedia
import wolframalpha
import config
import zerorpc
import logging

logging.basicConfig()

class SearchRPC(object):
    def wikisearch(self, article):
        wiki = wikipedia.page(article)
        parts = wiki.content.split('\n')
        result = {}
        imgs = wiki.images
        for img in imgs:
            if img.find(article.replace(" ", "_")) != -1:
                result["main_img"] = img
                break

        result["main_text"] = parts[0] + "\n\n"
        result["url"] = wiki.url
        result["url_text"] = "See Wikipedia page for %s" % article
        result["references"] = wiki.references
        return result

    def wolframsearch(self, query):
        client = wolframalpha.Client(config.getWolframAPIKey())
        res = client.query(query)
        result = {}
        text = ""
        print res.tree
        for pod in res.pods:
            primary = pod.node.attrib.get('primary')
            if primary and primary == 'true' and pod.text:
                print pod.text
                text = text + pod.text + "\n"

        result["main_text"] = text
        result["url"] = "http://www.wolframalpha.com/input/?i="+query.replace(" ", "+")
        result["url_text"] = "See Wolfram Alpha's answer to: %s" % query
        return result


s = zerorpc.Server(SearchRPC())
s.bind("tcp://0.0.0.0:4242")
s.run()
