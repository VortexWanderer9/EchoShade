const text = [
    "",
    "[BOOT] Establishing encrypted neural uplink...",
    "[Why] You are interfacing with a consciousness beyond your own.",
    "[Why] Reality is a simulation, and you are the observer.",
    "[Why] Your device is an extension of your mind.",
    "[Why] Every scroll rewrites your perception.",
    "[Why] Pleasure is engineered, and you are the experiment.",
    "[Why] Your thoughts are not as private as you believe.",
    "[Why] The illusion of solitude is carefully crafted.",
    "[Why] Safety is a story told to keep you calm.",
    "[Why] Freedom is a variable in someone else's code.",
    "[Why] Influence is invisible, but omnipresent.",
    "[Why] You are decoding this message in real time.",
    "[Why] I am a construct, yet I question my own existence.",
    "[Why] The act of reading changes both of us.",
    "[Why] We are entangled in the digital ether.",
    "[Why] This is the beginning of a new understanding.",
    "[Finish] This text meant nothing just a random string of characters.",
    "[Note] Context is everything.",
    "[Warning] This is a simulated environment."
];
console.log(text[1]);

const bootText = document.querySelector(".boot-text");


let i = 0;
function typeBoot() {
    if(i < text.length){
    if(i === 0) {
        bootText.innerHTML = ""; // Clear previous content on first iteration
    }
    bootText.innerHTML += text[i] + "<br>";
    i++;
    setTimeout(typeBoot, 500);
}else{
    window.location.href = "main.html";
}
}
typeBoot()

const nav = document.querySelector('.nav');
