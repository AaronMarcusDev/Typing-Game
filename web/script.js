// load_button

function loadWord() {
    eel.get_word()(function(word) {
        document.getElementById("word").innerHTML = word;
    });
}

function changeButtonState() {
    document.getElementById("load_button").innerHTML = "Next Word";
}

function clearResult() {
    document.getElementById("result").innerHTML = "";
}

let runLoadButton = () => {loadWord(); clearResult(); changeButtonState();}

function checkAnswer() {
    eel.check_answer(document.getElementById("answer").value)(function(answer) {
        document.getElementById("result").innerHTML = "<b>" + answer + "</b>";
    });
}

let runCheckAnswerButton = () => {checkAnswer();}