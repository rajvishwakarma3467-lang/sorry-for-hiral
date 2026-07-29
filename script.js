let text = 
"Hirruuuuu... 🥺 I know I can't change what happened, but I promise to learn from it and become a better person for us. ❤️";


let i = 0;


function openLetter(){

document.getElementById("welcome").style.display="none";

document.getElementById("letter").style.display="block";

typeWriter();

}



function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}




function noClick(){

let btn=document.getElementById("noBtn");


let x=Math.random()*250-125;

let y=Math.random()*200-100;


btn.style.transform=
`translate(${x}px,${y}px)`;

}




function yesClick(){


document.getElementById("final").innerHTML=

"🥹❤️ Thank you for forgiving me, Hirruuuuu.<br><br>I promise I'll keep learning, improving and always value you.<br><br>— Raj ❤️";



createHearts();

createConfetti();


}





function createHearts(){


for(let i=0;i<80;i++){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left=Math.random()*100+"%";

heart.style.top="60%";

heart.style.fontSize=
(15+Math.random()*25)+"px";


heart.style.animation=
"heartFly 3s linear";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},3000);



}


}




function createConfetti(){


for(let i=0;i<100;i++){


let c=document.createElement("div");


c.innerHTML="✨";


c.style.position="fixed";

c.style.left=Math.random()*100+"%";

c.style.top="-20px";

c.style.fontSize="25px";


c.style.animation=
"fall 3s linear";


document.body.appendChild(c);



setTimeout(()=>{

c.remove();

},3000);



}


}
