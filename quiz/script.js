var q1_answer = document.querySelector('input[name="q1"]:checked').value;
var q2_answer = document.querySelector('input[name="q2"]:checked').value;
var q3_answer = document.querySelector('input[name="q3"]:checked').value;
var q4_answer = document.querySelector('input[name="q4"]:checked').value;
var q5_answer = document.querySelector('input[name="q5"]:checked').value;

function check_q1() {
    if (q1_answer == "a") {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is a) 4");
    }
}
function check_q2() {
    if (q2_answer == "b") {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is b) 9");
    }   
}
function check_q3() {
    if (q3_answer == "c") {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is c) 16");
    }   
}
function check_q4() {
    if (q4_answer == "d") {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is d) 25");
    }
}
function check_q5() {
    if (q5_answer == "a") {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is a) 36");
    }
}   
submit_button.addEventListener("click", check_q1);