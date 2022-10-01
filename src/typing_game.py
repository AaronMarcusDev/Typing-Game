import eel

eel.init('../pages')

@eel.expose
def App():
    print("Up and running!")

App()
eel.start('index.html', size=(500, 600))