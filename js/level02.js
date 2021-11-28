//* JUMLAH BENER
let theTruth = 0;
let count = 0;
let score = document.querySelector("#score");
score.innerHTML = theTruth;

//* NGURUS SOAL

let questions = [
  //  PERKALIAN PEMBAGIAN
  ["5 x 7", "4 x 7", "more"],
  ["3 x 8", "6 x 4", "equals"],
  ["1 x 1", "1 x 2", "less"],

  ["7 x 6", "4 x 5", "more"],
  ["4 x 4", "2 x 8", "equals"],
  ["3 x 4", "6 x 4", "less"],

  ["9 x 9", "9 x 8", "more"],
  ["6 x 1", "1 x 6", "equals"],
  ["4 x 7", "7 x 7", "less"],

  ["9 : 3", "6 : 3", "more"],
  ["18 : 6", "15 : 5", "equals"],
  ["8 : 4", "6 : 1", "less"],

  ["24 : 6", "4 : 2", "more"],
  ["42 : 7", "54 : 9", "equals"],
  ["56 : 8", "63 : 7", "less"],

  ["72 : 9", "30 : 5", "more"],
  ["49 : 7", "63 : 7", "equals"],
  ["40 : 8", "56 : 8", "less"],

  ["21 : 3", "12 : 3", "more"],
  ["7 x 3", "7 x 4", "less"],
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
