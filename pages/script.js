// load_button

function loadWord() {
    eel.get_word()(function(word) {
        document.getElementById("word").innerHTML = word;
    });
}

function changeButtonState() {
    document.getElementById("load_button").innerHTML = "Next Word";
}

let runLoadButton = () => {loadWord(); changeButtonState();}