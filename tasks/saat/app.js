const clock = document.querySelector("#clock");

const time = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.innerText = `${hours}:${minutes}:${seconds}`;
};
time();

setInterval(() => {
  time();
}, 1000);