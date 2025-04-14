const correctCard = "1234567812345678";
const correctPin = "2004";
let balance = 1000;

const loginBtn = document.getElementById("loginBtn");
const cardInput = document.getElementById("cardNumber");
const pinInput = document.getElementById("pinCode");
const loginMessage = document.getElementById("loginMessage");
const menu = document.getElementById("menu");
const withdrawMoney = document.getElementById("withdrawMoney");
const withdrawInput = document.getElementById("withdrawAmount");
const sondakibalans = document.getElementById("balance");
const withdrawMessage = document.getElementById("withdrawMessage");

loginBtn.addEventListener("click", () => {
  const card = cardInput.value.trim();
  const pin = pinInput.value.trim();

  if (card === correctCard && pin === correctPin) {
    menu.style.display = "block";
    loginMessage.innerHTML = "";
  } else {
    loginMessage.innerHTML = "Kart nömrəsi və ya PIN yanlışdır.";
    menu.style.display = "none";
  }
});

withdrawMoney.addEventListener("click", () => {
  const mebleg = withdrawInput.value;

  if (mebleg <= 0) {
    withdrawMessage.innerHTML = "Düzgün məbləğ daxil edin.";
    return;
  }

  if (mebleg > balance) {
    withdrawMessage.innerHTML = "Balans kifayət etmir.";
    return;
}

balance -= mebleg;
sondakibalans.innerHTML = balance;
withdrawMessage.innerHTML = `${mebleg} AZN çıxarıldı.`;
});