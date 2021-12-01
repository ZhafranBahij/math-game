let progress = document.querySelector("#lost_progress");
let level01 = document.querySelector("#level01");
let level02 = document.querySelector("#level02");
let level03 = document.querySelector("#level03");
let level04 = document.querySelector("#level04");

// setInterval(() => {
//   let whatLevel = localStorage.getItem("Level_LP");
//   if (whatLevel >= 2) {
//     level02.className = "btn";
//   }
// }, 1000);

//* Unlock Level
let whatLevel = localStorage.getItem("Level_LP");
if (whatLevel >= 2) {
  level02.className = "btn";
} else if (whatLevel >= 3) {
  level03.className = "btn";
} else if (whatLevel >= 4) {
  level04.className = "btn";
}

progress.addEventListener("click", () => {
  // localStorage.clear();
  localStorage.removeItem("Level_LP");
  location.reload();
});
