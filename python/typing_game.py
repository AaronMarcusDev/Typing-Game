import eel
from fetch_words import Word_Fetcher


fetcher = Word_Fetcher("https://random-words-api.vercel.app/word")
word = None


@eel.expose
def get_word():
    word_data = fetcher.fetch()
    global word; word = word_data['word']
    description = word_data['definition']
    return description


@eel.expose
def check_answer(user_answer):
    if user_answer.lower() == str(word).lower():
        if user_answer.lower() == "none":
            return "Incorrect"
        else:
            return "Correct!"
    else:
        return "Incorrect"


@eel.expose
def get_answer():
    if word is not None:
        return word


if __name__ == '__main__':
    eel.init('../web')
    eel.start('index.html', size=(1400, 1100))