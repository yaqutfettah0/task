const qutular = document.getElementsByClassName("box");

for (let qutu of qutular) {
    const reng = qutu.innerText;

    qutu.onclick = () => {
        document.body.style.backgroundColor = reng;
    }
}