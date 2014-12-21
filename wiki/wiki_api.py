from wikipedia import Wikipedia
from wiki2plain import Wiki2Plain
import zerorpc

lang = 'en'
wiki = Wikipedia(lang)

class HelloRPC(object):
    def hello(self, name):
        return "Hello, %s" % name


    def wikisearch(self, article):
        try:
            raw = wiki.article(article)
        except:
            raw = None

        if raw:
            wiki2plain = Wiki2Plain(raw)
            content = wiki2plain.text
            return content
        else:
            return ""


s = zerorpc.Server(HelloRPC())
s.bind("tcp://0.0.0.0:4242")
s.run()
