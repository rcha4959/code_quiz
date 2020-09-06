var total_seconds = 30 * 1;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var timer;

function CheckTime() {
  document.getElementById("quiz-time-left").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';

  if (total_seconds <= 0) {
    score();
  } else {
    total_seconds = total_seconds - 1;
    c_minutes = parseInt(total_seconds / 60);
    c_seconds = parseInt(total_seconds % 60);
    timer = setTimeout(CheckTime, 1000);
  }
}
timer = setTimeout(CheckTime, 1000);

function score() {
  // stop timer
  clearInterval(timer);

  //Referencing the value of the questions
  var q1 = document.forms.form.q1.value;
  var q2 = document.forms.form.q2.value;
  var q3 = document.forms.form.q3.value;

  // disable form
  var elements = document.getElementById("questions").elements;
  for (var i = 0, len = elements.length; i < len; ++i) {
    elements[i].disabled = true;
  }

  //Array for the questions
  var questions = [q1, q2, q3];

  //Answers for each question
  var answers = ["d", "b", "b"];

  //variable to keep track of the points
  var points = 0;
  var total = 3;
  //max score 

  //Making use of a for loop to iterate over the questions and answers arrays
  for (var i = 0; i < total; i++) {
    if (questions[i] == answers[i]) {
      points = points + 1; //Increment the score by 2 for every correct answer given
    }
  }

  //CSS for questions
  var q = document.getElementById("p");

  q.style.fontSize = "40px";
  q.style.textAlign = "center";
  q.innerHTML = "You got " + points + " out of " + total +
    "<br />" +
    "you used " + (29 - Math.floor(total_seconds)) + " seconds";

  return false;
}