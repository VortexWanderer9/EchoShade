let form = document.getElementById('login-form'); 
let userName = document.getElementById('username');
let password = document.getElementById('password'); 
let loginMessage = document.getElementById('action-message');


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

form.addEventListener('submit', (event) => {
    event.preventDefault();
    loginMessage.textContent = '';
    let user = userName.value.trim();
    let pass = password.value.trim();
   let valid = true;
   if(!user){
       loginMessage.textContent = 'Please enter your username.';
       valid = false;
   }
   if(!pass){
       loginMessage.textContent = 'Please enter your password.';
       valid = false;
   }if(!user && !pass){
    loginMessage.textContent = 'Please enter username and password.';
       valid = false;
   }

   if(valid){
    if(user === "admin" && pass === "12345"){
        console.log(user, pass);
        
        loginMessage.style.color = "#00ff88"
        loginMessage.textContent = "You can entered into page"
        setInterval(() =>{
            window.location.href = 'boot.html'
        })
    }else{
        loginMessage.textContent = "Sorry! UserName and password is incorrect"
       document.querySelector('.login-container').classList.add('shake')
       setInterval(() => {
        document.querySelector('.login-container').classList.remove('shake')
       }, 1200);
    }
   }
   

});