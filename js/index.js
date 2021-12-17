let progress = document.querySelector("#lost_progress");
let level01 = document.querySelector("#level01");
let level02 = document.querySelector("#level02");
let level03 = document.querySelector("#level03");
let level04 = document.querySelector("#level04");

//* Bikin Tombol Bantuan
var helpButton = document.querySelector("#buttonInfo");

helpButton.addEventListener("click", () => {
  console.log("Yaharo");

  //* Buat Tulisan Informasi
  let titleInfo = document.createElement("h1");
  titleInfo.innerHTML = "About";
  titleInfo.style.color = "rgb(250, 250, 4)";
  titleInfo.style.fontSize = "3rem";
  titleInfo.style.textAlign = "center";

  //* Text Bantuan
  let information = document.createElement("p");
  information.innerHTML =
    "Mathnarik adalah game matematika yang menarik. Di mana bayangan kalian tentang MTK akan kami ubah.<br>Mathnarik dibuat oleh :</br>";
  information.style.color = "white";

  //* Developer
  let timdev = document.createElement("ul");
  timdev.innerHTML = `
  <li>Atikah Khonsa Salsabila (Perancang Soal)</li>
  <li>Ecep Jiyaul Rojak (Desain)</li>
  <li>Ferdy Nugraha Rachmadi (Front End Web)</li>
  <li>Muhammad Zhafran Bahij (Front End Web)</li>
  <li>Handini Aprillia Wijaya (Desain)</li>
  <li>Rahma Wati Malawat (Front End Web)</li>`;
  timdev.style.color = "white";

  //* Special Thanks
  let spThanks = document.createElement("p");
  spThanks.innerHTML =
    "Kami berterima kasih kepada Pak Makmuri yang telah membimbing kami dalam pembuatan game, keluarga kami yang telah mendukung kami, teman-teman kami yang telah menyemangati kami, dan kepada Tuhan yang Maha Esa yang telah memberikan kami kenikmatan yang tak terhitung banyaknya";
  spThanks.style.textAlign = "center";
  spThanks.style.color = "white";

  //* Kotak Sakti
  let kotak = document.createElement("div");
  kotak.style.backgroundColor = "3C5FDB";
  // kotak.style.borderRadius = "25px";
  kotak.style.height = "80vh";
  kotak.style.width = "80vw";

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

  kotak.appendChild(titleInfo);
  kotak.appendChild(information);
  kotak.appendChild(timdev);
  kotak.appendChild(spThanks);
  container.style.fontFamily = "Coiny";
  container.style.fontSize = "1.5rem";

  //* Buat Button Silang
  let crossButton = document.createElement("button");
  crossButton.innerHTML = "X";
  crossButton.className = "btn btn-danger";
  crossButton.style.position = "relative";
  crossButton.style.bottom = "0px";
  crossButton.addEventListener("click", () => {
    container.remove();
  });

  container.appendChild(kotak);
  container.appendChild(crossButton);

  document.body.appendChild(container);
});

if (typeof Storage !== "undefined") {
  // Code for localStorage/sessionStorage.
  // localStorage.setItem("number", "0");
  // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
  if (localStorage.getItem("Level_LP") === "null") {
    // Jika belum maka akan atur dengan nilai awal yakni 0
    localStorage.setItem("Level_LP", 0);
  }
  var count = localStorage.getItem("Level_LP");
  setInterval(() => {
    //* Unlock level
    localStorage.setItem("Level_LP", count);
  }, 100);
} else {
  // Sorry! No Web Storage support..
}

let whatLevel = localStorage.getItem("Level_LP");

if (whatLevel >= 2) {
  level02.className = "btn";
}
if (whatLevel >= 3) {
  level03.className = "btn";
}
if (whatLevel >= 4) {
  level04.className = "btn";
}

progress.addEventListener("click", () => {
  localStorage.setItem("Level_LP", 0);
  location.reload();
});
