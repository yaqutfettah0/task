const showhideBtn = document.querySelector("#showhideBtn");
const title = document.querySelector("#title");

let isShow = false;


const setbutton = () => {
    if(isShow){
        showhideBtn.innerText ='<';
        title.style.visibility = 'visible';
    } else {
        showhideBtn.innerText ='^';
        title.style.visibility = 'hidden';
    }
}

setbutton ();

showhideBtn.onclick = () => {
    isShow = !isShow;

    setbutton();
}
