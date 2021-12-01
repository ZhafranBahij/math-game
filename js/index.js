let progress = document.querySelector("#lost_progress");
let level01 = document.querySelector("#level01");
let level02 = document.querySelector("#level02");
let level03 = document.querySelector("#level03");
let level04 = document.querySelector("#level04");

if (typeof Storage !== "undefined") {
  // Code for localStorage/sessionStorage.
  // localStorage.setItem("number", "0");
  // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
  if (localStorage.getItem("Level_LP") === "undefined") {
    // Jika belum maka akan atur dengan nilai awal yakni 0
    localStorage.setItem("Level_LP", 0);
  }
  var count = localStorage.getItem("Level_LP");
  setInterval(() => {
    localStorage.setItem(cacheKey, count);
  }, 100);
} else {
  // Sorry! No Web Storage support..
}

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
