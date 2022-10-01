import requests

class Word_Fetcher:
    def __init__(self, adress):
        self.adress = adress

    def fetch(self):
        return requests.get(self.adress).json()[0]