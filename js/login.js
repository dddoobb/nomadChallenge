

const loginForm = document.querySelector("#login-form") 
const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("#greeting")


const USERNAME_KEY = "username"
const HIDDEN_CLASS = "hidden"


function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASS)
    greeting.innerHTML = `Hello! ${username}`
}

function handleSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASS)
    paintGreeting(username);

}


const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    
    loginForm.classList.remove(HIDDEN_CLASS)
    loginForm.addEventListener("submit", handleSubmit) // <form> 전체를 submit하는 것. input만 submit하면 안됨.

}else{
    paintGreeting(savedUsername)
}


