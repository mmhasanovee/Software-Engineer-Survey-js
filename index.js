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

//manipulating dom with questions
document.getElementById(idQ1).innerHTML = idQ1 + ". " + ques1.title;
document.getElementById(idQ2).innerHTML = idQ2 + ". " + ques2.title;
document.getElementById(idQ3).innerHTML = idQ3 + ". " + ques3.title;
document.getElementById(idQ4).innerHTML = idQ4 + ". " + ques4.title;

//Selecting all the elements on select button for q3
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
      answer3 += items[i].value + ", ";
  }
  //console.log(answer1, answer2, answer3, answer4);
  fieldValidator(answer1, answer2, answer3, answer4);
}

//validating if required answers were given
function fieldValidator(answer1, answer2, answer3, answer4) {
  if (answer1 == "" || answer2 == "" || answer4 == "") {
    alert("Answering Q1, Q2, Q4 are mandatory!");
  } else {
    if (answer3 == "") {
      answer3 = "No answer";
    }
    showResult(answer1, answer2, answer3, answer4);
  }
}

//injecting result in the dom
function showResult(answer1, answer2, answer3, answer4) {
  var answerList = `✱Experience in years: <b class="answer"> ${answer1}</b><br/><br/>✱Main programming language is: <b class="answer"> ${answer2}</b><br/><br/> ✱Skills: <b class="answer"> ${answer3}</b><br/><br/> ✱About current role: <b class="answer"> ${answer4}</b>`;
  document.getElementById("result").innerHTML = answerList;

  //toggling disply
  var frm = document.getElementById("form");
  var tnk = document.getElementById("resultContainer");
  frm.style.display = "none";
  tnk.style.display = "block";
}

