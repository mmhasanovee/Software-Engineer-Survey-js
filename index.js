//Md Mehedi Hasan

//question ids on HTML
const idQ1 = "Q1";
const idQ2 = "Q2";
const idQ3 = "Q3";
const idQ4 = "Q4";

//constructor for questions
function Question(no, title, type, options) {
  this.no = no;
  this.title = title;
  this.type = type;
  this.options = options;
}

//constructor for answers
function answers(qno, answer) {
  this.qno = qno;
  this.answer = answer;
}

const ques1 = new Question(
  1,
  "How many years of experience do you have?",
  "W/H"
);

const ques2 = new Question(
  2,
  "Which is your main programming language?",
  "MCQ"
);

const ques3 = new Question(3, "What skills do you have?", "MRQ");

const ques4 = new Question(4, "Shortly describe abour yourself.", "ESSAY");

//manipulating dom
document.getElementById(idQ1).innerHTML = idQ1 + ". " + ques1.title;
document.getElementById(idQ2).innerHTML = idQ2 + ". " + ques2.title;

var answer = document.getElementById("1").value;

function fieldValidator() {
  var answer = document.getElementById("1").value;
  if (answer == "") {
    console.log("one of them is not null");
  }
  var ele = document.getElementsByName("q1answer");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) console.log(ele[i].value);
  }
}

console.log(ques1, ques2, ques3, ques4);
