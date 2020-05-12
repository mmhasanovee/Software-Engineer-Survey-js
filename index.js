//Md Mehedi Hasan 11091~

//question ids on HTML h3 tag
const idQ1 = "Q1";
const idQ2 = "Q2";
const idQ3 = "Q3";
const idQ4 = "Q4";

//constructor for questions
function Question(no, title, type) {
  this.no = no;
  this.title = title;
  this.type = type;
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

const ques3 = new Question(
  3,
  "What are the following skills do you have?",
  "MRQ"
);

const ques4 = new Question(
  4,
  "Shortly describe about your current role.",
  "ESSAY"
);

//manipulating dom
document.getElementById(idQ1).innerHTML = idQ1 + ". " + ques1.title;
document.getElementById(idQ2).innerHTML = idQ2 + ". " + ques2.title;
document.getElementById(idQ3).innerHTML = idQ3 + ". " + ques3.title;
document.getElementById(idQ4).innerHTML = idQ4 + ". " + ques4.title;

//Selecting all the elements on select all click for question3
document.getElementById("select-all").onclick = function () {
  var checkboxes = document.getElementsByName("q3answer");
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
};

function selectAllToggle() {
  if (document.getElementById("select-all").checked) {
    document.getElementById("select-all").checked = false;
  }
}
//fetching all the answers
function fetchAnswers() {
  var answer1 = document.getElementById("q1answer").value;
  var answer2 = "";
  var answer3 = "";
  var answer4 = document.getElementById("q4answer").value;

  //fetching Q2 answers
  var ele = document.getElementsByName("q2answer");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      answer2 = ele[i].value;
    }
  }

  //fetching Q3 answers
  var items = document.getElementsByName("q3answer");
  var answer3 = "";
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "checkbox" && items[i].checked == true)
      answer3 += items[i].value + "\n";
  }
  //console.log(answer1, answer2, answer3, answer4);
  fieldValidator(answer1, answer2, answer3, answer4);
}

//validating if all required answers were given
function fieldValidator(answer1, answer2, answer3, answer4) {
  if (answer1 == "" || answer2 == "" || answer4 == "") {
    alert("Answering Q1,Q2,Q3 are mandatory!");
  } else {
    showResult(answer1, answer2, answer3, answer4);
  }
}

function showResult(answer1, answer2, answer3, answer4) {
  document.getElementById("presult").innerHTML =
    answer1 + "</br>" + answer2 + "</br>" + answer3 + "</br>" + answer4;
}

function answerInsert() {}

//console.log(ques1, ques2, ques3, ques4);
