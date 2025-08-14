const form = document.getElementById('login-form'); 
const userName = document.getElementById('username');
const password = document.getElementById('password'); 
const loginMessage = document.getElementById('action-message');


const title = document.querySelector('#login-title');
const text = 'Welcome to EchoShade'
let i = 0;
function typeWriter() {
if (i < text.length) {
    title.textContent = text.substring(0, i + 1)
    i++;
    setTimeout(typeWriter, 200);
}
}
typeWriter()