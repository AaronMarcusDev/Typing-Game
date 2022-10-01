import eel
from fetch_words import Word_Fetcher

fetcher = Word_Fetcher("https://random-words-api.vercel.app/word")

@eel.expose
def get_word():
    word_data = fetcher.fetch()
    word = word_data['word']
    description = word_data['definition']
    return description

if __name__ == '__main__':
    eel.init('../pages')
    eel.start('index.html', size=(500, 600))