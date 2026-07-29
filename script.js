const messages = [

"I messed up... and I'm really sorry for that. 🥺🥺",

"I promise I'll be better more 😘😘",

"Please forgive me... You mean so much to me. ☹️☹️",

"I'm really sorry Hiral, I accidentally upset the most precious and adorable person in my life — you. 🥹",

"Please forgive me. If I hurt you or even if I was a little rude, I promise I didn't mean to. 🥺💕",

"I know I can't change what happened, but I promise to learn from it and become a better person for us. ❤️"

];


let current=0;



function openLetter(){

document.getElementById("welcome").style.display="none";

document.getElementById("letter").style.display="block";

showMessage();

}



function showMessage(){

let box=document.getElementById("messageText");

box.innerHTML="";

let text=messages[current];

let i=0;


let typing=setInterval(()=>{

box.innerHTML+=text[i];

i++;


if(i>=text.length){

clearInterval(typing);

}

},45);


}





function nextMessage(){


current++;


if(current < messages.length){

showMessage();

}

else{


document.querySelector(".message-area").style.display="none";

document.getElementById("forgive").style.display="block";


}


}




function noClick(){


let btn=document.getElementById("noBtn");


btn.style.transform=

`translate(${Math.random()*200-100}px,
${Math.random()*100-50}px)`;

}




function yesClick(){


document.getElementById("letter").style.display="none";

document.getElementById("celebration").style.display="block";


startCelebration();


}




function startCelebration(){


for(let i=0;i<120;i++){


let item=document.createElement("div");


let type=Math.random();


if(type<0.5){

item.innerHTML="❤️";

}
else if(type<0.8){

item.innerHTML="🌹";

}
else{

item.innerHTML="✨";

}



item.style.position="fixed";

item.style.left=Math.random()*100+"%";

item.style.top="-30px";

item.style.fontSize=
(15+Math.random()*25)+"px";


item.style.animation=
"fall 4s linear";


document.body.appendChild(item);



setTimeout(()=>{

item.remove();

},4000);



}


}
