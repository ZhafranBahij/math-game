//* JUMLAH BENER
let theTruth = 0;
let count = 0;
let score = document.querySelector("#score");
score.innerHTML = theTruth;

//* NGURUS SOAL

let quest01 = document.querySelector("#quest01");
let quest02 = document.querySelector("#quest02");
let endQuest = document.querySelector("#end_question");

let random = Math.floor(Math.random() * questions["data"].length);
let question = questions["data"][random];
// let question = questions["data"][0];

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
  question = questions["data"][++random];

  quest01.innerHTML = question[0];
  quest02.innerHTML = question[1];
  score.innerHTML = theTruth;
  // ++count;
  if (++count == 5) {
    document.querySelector("#question_menu").classList = "visually-hidden";
    endQuest.innerHTML = `Score kamu adalah ${theTruth}`;

    //* Save Progress
    if (localStorage.getItem("Level_LP") < questions["unlock_level"]) {
      localStorage.setItem("Level_LP", questions["unlock_level"]);
    }
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

//* Bikin Tombol Bantuan
var helpButton = document.querySelector("#buttonInfo");

helpButton.addEventListener("click", () => {
  console.log("Yaharo");

  //* Buat Tulisan Informasi
  let titleInfo = document.createElement("h1");
  titleInfo.innerHTML = "Informasi";
  titleInfo.style.color = "rgb(250, 250, 4)";
  titleInfo.style.fontSize = "3rem";

  //* Text Bantuan
  let information = document.createElement("div");
  let infoplus = document.createElement("p");
  infoplus.innerHTML = questions["example"];
  let infoplustext = document.createElement("p");
  infoplustext.innerHTML = questions["description"];

  information.appendChild(infoplus);
  information.appendChild(infoplustext);
  information.style.color = "white";
  information.style.fontSize = "2rem";
  information.className = "text-center";

  //* Buat container
  let container = document.createElement("div");
  container.id = "info";
  container.className =
    "d-flex justify-content-center align-items-center flex-column";
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0";
  container.style.height = "100vh";
  container.style.width = "100vw";
  container.style.zIndex = "1";
  container.style.backgroundColor = "#54D1ECDD";

  container.appendChild(titleInfo);
  container.appendChild(information);
  container.style.fontFamily = "Coiny";

  //* Buat Button Silang
  let crossButton = document.createElement("button");
  crossButton.innerHTML = "X";
  crossButton.className = "btn btn-danger";
  crossButton.style.position = "relative";
  crossButton.addEventListener("click", () => {
    container.remove();
  });

  container.appendChild(crossButton);

  document.body.appendChild(container);
});
