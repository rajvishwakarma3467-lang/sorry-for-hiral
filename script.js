const messages = [
"I messed up... and I'm really sorry for that. 🥺🥺",
"I promise I'll be better more 😘😘",
"Please forgive me... You mean so much to me. ☹️☹️",
"I'm really sorry Hiral, I accidentally upset the most precious and adorable person in my life — you. 🥹",
"Please forgive me. If I hurt you or even if I was a little rude, I promise I didn't mean to. 🥺💕",
"I know I can't change what happened, but I promise to learn from it and become a better person for us. ❤️"
];

let current = 0;

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

const typedMessage = document.getElementById("typedMessage");
const nextBtn = document.getElementById("nextBtn");

const dots = document.querySelectorAll(".dot");

document.getElementById("openBtn").onclick = () => {

screen1.classList.remove("active");
screen2.classList.add("active");

showMessage();

};

function showMessage(){

typedMessage.innerHTML="";

dots.forEach(d=>d.classList.remove("active"));

if(dots[current]) dots[current].classList.add("active");

let text=messages[current];

let i=0;

let timer=setInterval(()=>{

typedMessage.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},35);

}

nextBtn.onclick=()=>{

current++;

if(current<messages.length){

showMessage();

}else{

screen2.classList.remove("active");
screen3.classList.add("active");

}

};
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const thanksMessage = document.getElementById("thanksMessage");
const rain = document.getElementById("rain");

// 🥺 No button escapes
noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo(e) {
    e.preventDefault();

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.transform =
        `rotate(${Math.random() * 40 - 20}deg)`;
}

// ❤️ Yes button
yesBtn.addEventListener("click", () => {

    screen3.classList.remove("active");
    screen4.classList.add("active");

    thanksMessage.style.display = "block";

    celebrate();

});

function celebrate(){

    const items=["❤️","🌹","🌸","✨"];

    let total=180;

    for(let i=0;i<total;i++){

        const el=document.createElement("div");

        el.innerHTML=items[Math.floor(Math.random()*items.length)];

        el.style.position="fixed";

        el.style.left=Math.random()*100+"vw";

        el.style.top="-50px";

        el.style.fontSize=(18+Math.random()*24)+"px";

        el.style.pointerEvents="none";

        el.style.animation=
        `fall ${4+Math.random()*4}s linear forwards`;

        el.style.animationDelay=(Math.random()*2)+"s";

        rain.appendChild(el);

        setTimeout(()=>{
            el.remove();
        },9000);

    }

}
/* Floating hearts */

setInterval(()=>{

const heart=document.createElement("div");

heart.className="bgHeart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(10+Math.random()*18)+"px";

heart.style.animationDuration=
(8+Math.random()*8)+"s";

document.getElementById("particles").appendChild(heart);

setTimeout(()=>{

heart.remove();

},16000);

},600);
