const text = "Hirruuuuu... 🥺 Thank you for opening this. Every word here comes from my heart. I hope you'll read till the end. ❤️";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

typeWriter();

document.getElementById("forgiveBtn").onclick = function () {
    alert("🥺 Thank you for reading everything. I truly hope you can forgive me. ❤️ - Raj");
};
