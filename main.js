const cookieImage = document.querySelector("#cookie-image");
const openAnotherBtn = document.querySelector(".open-button");
const sectionTitle = document.querySelector("#fortune-cookie h1");
const sectionText = document.querySelector("#fortune-cookie p");
const luckText = document.querySelector("#luck-container");

let luckPhrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Todas as coisas são difícieis antes de se tornarem fáceis.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
];

cookieImage.addEventListener("click", openCookie);
openAnotherBtn.addEventListener("click", openAnotherCookie);

function openCookie() {
  sectionTitle.innerText = "Aqui está a sua sorte de hoje:";
  cookieImage.setAttribute("src", "./assets/opened-cookie.png");

  loadRandomLuckPhrase();
  resetTexts();
}

function openAnotherCookie() {
  sectionTitle.innerText = "Qual é a sua sorte de hoje?";
  cookieImage.setAttribute("src", "./assets/fortune-cookie.png");

  resetTexts();
}

function resetTexts() {
  cookieImage.classList.toggle("closed");
  luckText.classList.toggle("hide");
  sectionText.classList.toggle("hide");
  openAnotherBtn.classList.toggle("hide");
}

function loadRandomLuckPhrase() {
  let randomIndex = Math.floor(Math.random() * luckPhrases.length);
  luckText.innerHTML = luckPhrases[randomIndex];
}
