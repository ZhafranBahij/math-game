//* JUMLAH BENER
let theTruth = 0;
let count = 0;
let score = document.querySelector("#score");
score.innerHTML = theTruth;

//* NGURUS SOAL

let questions = [
  ["5 + 6", "3 + 2", "more"],
  ["4 + 2", "2 + 4", "equals"],
  ["4 + 7", "7 + 5", "less"],

  ["6 - 3", "5 - 3", "more"],
  ["6 - 3", "7 - 4", "equals"],
  ["4 - 3", "4 - 1", "less"],

  ["9 - 3", "9 - 4", "more"],
  ["8 - 5", "8 - 5", "equals"],
  ["4 - 4", "4 - 3", "less"],
];

let quest01 = document.querySelector("#quest01");
let quest02 = document.querySelector("#quest02");
let endQuest = document.querySelector("#end_question");

let question = questions[Math.floor(Math.random() * questions.length)];

quest01.innerHTML = question[0];
quest02.innerHTML = question[1];

//* NGURUS BUTTON

let buttonLess = document.querySelector("#less");
let buttonEquals = document.querySelector("#equals");
let buttonMore = document.querySelector("#more");

const clickButton = (operator) => {
  console.log(operator);
  if (question[2] == operator) {
    theTruth++;
    console.log("Kau Benar");
  } else {
    console.log("Kau Salah");
  }
  question = questions[Math.floor(Math.random() * 9)];

  quest01.innerHTML = question[0];
  quest02.innerHTML = question[1];
  score.innerHTML = theTruth;
  // ++count;
  if (++count == 5) {
    document.querySelector("#question_menu").classList = "visually-hidden";
    endQuest.innerHTML = `Score kamu adalah ${theTruth}`;
  }
};

buttonLess.addEventListener("click", () => {
  clickButton("less");
});

buttonEquals.addEventListener("click", () => {
  clickButton("equals");
});

buttonMore.addEventListener("click", () => {
  clickButton("more");
});
