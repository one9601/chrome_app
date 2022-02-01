

const clock = document.querySelector("#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`


  // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  // 2자리 이하인 숫자앞에 0을 붙이기위하여 위와같이 코드수정
  // String을 사용하는 이유 : padStart는 문자열의 시작을 다른 문자로 채워주는 함수이기 때문.

};

String(new Date().getHours());

getClock();
setInterval(getClock, 1000);




// const clock = document.querySelector("#clock");

// function sayhello(){
//   console.log("hello");
// }

// setInterval(sayhello, 5000);

// ==setInterval 기본설명==

// setTimeout(sayhello, 5000);