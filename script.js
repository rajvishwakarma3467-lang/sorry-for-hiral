const jsConfetti = new JSConfetti();
// ==========================
// MESSAGES
// ==========================

const messages = [
"I messed up... and I'm really sorry for that. 🥺🥺",

"I promise I'll learn from my mistakes and become better. ❤️",

"Please forgive me... You mean a lot to me. 🥺",

"I'm really sorry Hiral, I never wanted to hurt you. 🥹",

"If I made you sad, I truly regret it. Please forgive me. 💕",

"I know I can't change what happened, but I promise to learn from it and become a better person for us. ❤️"
];

let current = 0;


// ==========================
// ELEMENTS
// ==========================

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");

const envelope = document.getElementById("envelope");

const message = document.getElementById("message");

const dots = document.querySelectorAll(".dot");


// ==========================
// OPEN HEART BUTTON
// ==========================

openBtn.addEventListener("click",()=>{

envelope.classList.add("open");


setTimeout(()=>{

screen1.classList.remove("active");

screen2.classList.add("active");

showMessage();

},800);


});
envelope.classList.add("open");

setTimeout(()=>{

document.querySelector(".envelope-letter").style.transform =
"translateY(-140px) scale(1.08)";

},600);

// ==========================
// TYPE MESSAGE
// ==========================

function showMessage(){

message.innerHTML="";


dots.forEach(dot=>{
dot.classList.remove("active");
});


if(dots[current]){
dots[current].classList.add("active");
}


let text = messages[current];

let index = 0;


let typing=setInterval(()=>{


message.innerHTML += text.charAt(index);


index++;


if(index >= text.length){

clearInterval(typing);

}


},45);


}


// ==========================
// NEXT BUTTON
// ==========================

nextBtn.addEventListener("click",()=>{


current++;


if(current < messages.length){

showMessage();


}

else{


screen2.classList.remove("active");

screen3.classList.add("active");


}


});
// ==========================
// YES / NO SCREEN
// ==========================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const finalText = document.getElementById("finalText");


// ==========================
// NO BUTTON ESCAPE
// ==========================

function moveNoButton(){

const x = Math.random() * (window.innerWidth - 120);

const y = Math.random() * (window.innerHeight - 80);


noBtn.style.position = "fixed";

noBtn.style.left = x + "px";

noBtn.style.top = y + "px";

}


noBtn.addEventListener("mouseenter",moveNoButton);

noBtn.addEventListener("touchstart",(e)=>{

e.preventDefault();

moveNoButton();

});


// ==========================
// YES CLICK
// ==========================

yesBtn.addEventListener("click",()=>{


screen3.classList.remove("active");

screen4.classList.add("active");


finalText.style.display="block";


celebration();


});
jsConfetti.addConfetti({
    emojis: ["❤️","🌹","🌸","✨","💖"],
    emojiSize: 40,
    confettiNumber: 120
});

setTimeout(()=>{
    jsConfetti.addConfetti({
        emojis:["💗","💕","💞","🌺"],
        emojiSize:45,
        confettiNumber:80
    });
},700);

setTimeout(()=>{
    jsConfetti.addConfetti({
        emojis:["❤️","🌹","🌸"],
        emojiSize:50,
        confettiNumber:100
    });
},1500);

// ==========================
// HEART + FLOWER RAIN
// ==========================

function celebration(){


const items=[

"❤️",
"🌹",
"🌸",
"✨"

];


for(let i=0;i<180;i++){


setTimeout(()=>{


const item=document.createElement("div");


item.className="drop";


item.innerHTML =
items[Math.floor(Math.random()*items.length)];


item.style.left =
Math.random()*100+"vw";


item.style.fontSize =
(18+Math.random()*25)+"px";


item.style.animationDuration =
(4+Math.random()*5)+"s";


document.body.appendChild(item);



setTimeout(()=>{

item.remove();

},9000);



},i*35);



}


}


// ==========================
// FLOATING BACKGROUND HEARTS
// ==========================


setInterval(()=>{


const heart=document.createElement("div");


heart.className="bgHeart";


heart.innerHTML="❤️";


heart.style.left =
Math.random()*100+"vw";


heart.style.fontSize =
(12+Math.random()*20)+"px";


heart.style.animationDuration =
(7+Math.random()*8)+"s";



document.getElementById("particles")
.appendChild(heart);



setTimeout(()=>{

heart.remove();

},15000);



},800);
// ==========================
// STARS
// ==========================

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=
(Math.random()*2)+"s";

star.style.animationDuration=
(1+Math.random()*3)+"s";

stars.appendChild(star);

}
// ==========================
// MUSIC
// ==========================

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

if(playing){

music.pause();

musicBtn.innerHTML="🎵";

}else{

music.play();

musicBtn.innerHTML="⏸";

}

playing=!playing;

};


// ==========================
// CURSOR SPARKLES
// ==========================

document.addEventListener("mousemove",e=>{

const spark=document.createElement("div");

spark.className="spark";

spark.innerHTML=["✨","💖","❤️"][Math.floor(Math.random()*3)];

spark.style.left=e.clientX+"px";

spark.style.top=e.clientY+"px";

document.body.appendChild(spark);

setTimeout(()=>{

spark.remove();

},800);

});
