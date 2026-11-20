const btn = document.getElementById("toggle");

btn.onclick = () => console.log("btn on click");

const showmsg = () => {
    const msg = document.getElementById("msg");
    if(msg.classList.contains("hidden")) {
        msg.classList.remove("hidden")
        }
}

const hiddenMsg = () => {
    if(!msg.classList.contains("hidden")) {
        msg.classList.remove("hidden");
        }
        setTimeout(hiddenMsg, 10000);

}

btn.addEventListener("click", showmsg);
hiddenMsg();

const link = document.querySelector(".link");
link.addEventListener("click", event => {
    event.preventDefault();

})
link.addEventListener("click", showmsg, {once: true});

document.addEventListener("keydown", e => {
    // console.log("event code ->", e.code);
    // console.log("event key ->", e.key);
    if(e.key === "Escape") {
        hiddenMsg();
    }
})


//setTimeout(() => link.removeEventListener("click", showmsg), 10000);

