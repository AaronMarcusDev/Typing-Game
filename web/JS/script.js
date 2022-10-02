// load_button

function loadWord() {
    eel.get_word()(function(word) {
        document.getElementById("word").innerHTML = "<p>" + word + "</p>";
    });
}

function changeButtonState() {
    document.getElementById("load_button").innerHTML = "Next word";
}

function clearResult() {
    document.getElementById("answer").value = "";
    document.getElementById("result").innerHTML = "<p>No answer yet</p>";
}

let runLoadButton = () => {loadWord(); changeButtonState(); clearResult();}

// check_answer_button
function checkAnswer() {
    eel.check_answer(document.getElementById("answer").value)(async function(answer) {
        document.getElementById("result").innerHTML = "<p>" + answer + "</p>";
        await new Promise(resolve => setTimeout(resolve, 800));
        document.getElementById("result").innerHTML = "<p class=\"invisible\"> a </p>";
    });
}

let runCheckAnswerButton = () => checkAnswer();

// load_answer_button

function loadAnswer() {
    eel.get_answer()(function(answer) {
        document.getElementById("word").innerHTML = answer;
    });
}