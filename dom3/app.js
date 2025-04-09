const currentLangBox = document.querySelectorAll(".currentLangBox");
const deActiveLangsBox = document.querySelectorAll(".deActiveLangs");

const langs = ["AZ", "EN", "RU"];
let activeLang = langs[0];
let deActiveLangs = langs.filter((l) => l !== activeLang);

const showLangs = () => {
  deActiveLangs.forEach((lang) => {
    deActiveLangsBox.forEach((b) => {
      b.innerHTML += `<li onclick="setActiveLang('${lang}')">${lang}</li>`;
    });
  });

  currentLangBox.forEach(
    (b) =>
      (b.innerHTML =
        activeLang + '<i class="fa-solid fa-arrow-right arrow" id="arrow"></i>')
  );
};
showLangs();

currentLangBox.forEach(
  (b) =>
    (b.onclick = () => {
      const arrow = document.querySelector("#arrow");
      arrow.classList.toggle("fa-arrow-down");
      b.classList.toggle("show");
    })
);

function setActiveLang(lang) {
  deActiveLangsBox.forEach((b) => (b.innerHTML = ""));
  activeLang = lang;
  deActiveLangs = langs.filter((l) => l !== activeLang);
  showLangs();
}


const bars = document.querySelector("#bars");
const mobileMenu = document.querySelector("#mobileMenu");

bars.onclick = () => {
  mobileMenu.classList.toggle("showMobile");
};