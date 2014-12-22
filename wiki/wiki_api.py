import wikipedia
import zerorpc
import logging

logging.basicConfig()

class WikiRPC(object):
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
        result["references"] = wiki.references
        return result


s = zerorpc.Server(WikiRPC())
s.bind("tcp://0.0.0.0:4242")
s.run()
