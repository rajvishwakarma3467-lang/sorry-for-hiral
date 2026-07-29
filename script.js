function openLetter(){

    document.querySelector(".welcome").style.display="none";

    document.querySelector(".letter").style.display="block";

    typeWriter();

}


const text = 
"Hirruuuuu... 🥺 I know I made a mistake. I just want you to know that you are very special to me. ❤️";


let index = 0;


function typeWriter(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,50);

    }

}



function forgive(){

    document.getElementById("final").innerHTML =
    "🥹❤️ Thank you for reading my message. I truly hope you can forgive me. You will always be special to me. ❤️<br><br>— Raj";

    createHearts();

}



function createHearts(){

    for(let i=0;i<30;i++){

        let heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"%";
        heart.style.top="100%";
        heart.style.fontSize="25px";

        heart.style.animation=
        "float 4s linear";

        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },4000);

    }

}
