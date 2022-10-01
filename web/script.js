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

function checkAnswer() {
    eel.check_answer(document.getElementById("answer").value)(function(answer) {
        document.getElementById("word").innerHTML = answer;
    });
}

let runCheckAnswerButton = () => {checkAnswer();}