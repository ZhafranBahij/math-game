//* JUMLAH BENER
let theTruth = 0;
let count = 0;
let score = document.querySelector("#score");
score.innerHTML = theTruth;

//* NGURUS SOAL

let quest01 = document.querySelector("#quest01");
let quest02 = document.querySelector("#quest02");
let endQuest = document.querySelector("#end_question");

let question = questions[Math.floor(Math.random() * questions.length)];

quest01.innerHTML = question[0];
quest02.innerHTML = question[1];

//*
let doc = document.querySelector("#question_menu");
let doc2 = document.querySelector("#answer");

//* Alert berhasil atau gagal

const signAlert = (sign = "berhasil") => {
  //* Buat alert
  let alerta = document.createElement("div");

  //* Jika gagal
  if (sign == "gagal") {
    alerta.className = "alert alert-danger";
    alerta.innerHTML = "Kurang Tepat <(-_-)>";
  }
  //* Jika berhasil
  else {
    alerta.className = "alert alert-success";
    alerta.innerHTML = "Uwoooo, Betul!! (^~^)	";
  }

  //* Alertnya muncul di box
  doc.insertBefore(alerta, doc2);

  //* Alertnya hilang dalam 1,5 detik
  setTimeout(() => {
    let alerta = document.querySelector(".alert");
    alerta.remove();
  }, 1500);
};

//* NGURUS BUTTON

let buttonLess = document.querySelector("#less");
let buttonEquals = document.querySelector("#equals");
let buttonMore = document.querySelector("#more");

const clickButton = (operator) => {
  console.log(operator);
  if (question[2] == operator) {
    theTruth++;
    signAlert();
    console.log("Kau Benar");
  } else {
    signAlert("gagal");
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

    //* Save Progress
    localStorage.setItem("Level_LP", 2);
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
