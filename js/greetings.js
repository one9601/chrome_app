const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");


// function handleLoginBtnClick(){
//   const userName = loginInput.value;
//   if(userName === ""){
//     alert("Please write your name.");
//   } else if(userName.length > 15){
//     alert("Your name is too long");
//   }
// }

// function handleLoginBtnClick(){

// }

// loginButton.addEventListener("click", handleLoginBtnClick);

// ==자바스크립트의 글자체크




// ===localStorage===

// localStorage.removeItem / localStorage.getItem / localStorage.setItem




const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username){
  greeting.innerText = `안녕하세요, ${username}님.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
  event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기 // event object는 preventDefault함수를 기본적으로 갖고 있음
  const usernameThatTheUserWrote = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // greeting.innerText = "Hello " + username;
  // 아래로 축약할수 있음 / ${}는 변수를 표현하는 방법
  paintGreetings(usernameThatTheUserWrote);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
 