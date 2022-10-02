document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        eel.check_answer(document.getElementById("answer").value)(async function(answer) {
            document.getElementById("result").innerHTML = "<p>" + answer + "</p>";
            if (answer == "Correct!") {
                document.getElementById("point_counter").innerHTML = "<p>Points: " + ++points + "</p>";
            }
            await new Promise(resolve => setTimeout(resolve, 800));
            document.getElementById("result").innerHTML = "<p class=\"invisible\"> a </p>";
        });
    }
});