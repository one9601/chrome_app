const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
// toDos는 사용자가 작성 시 매번 변경되므로 let
const TODOS_KEY ="todos";

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// JSON.stringify() == 문자로 저장

function sexyFilter(toDo){
  return toDo.id !== parseInt(li.id);
  // toDo.id 와 parseInt(li.id)가 같지 않으면, true를 반환해야 함.
  // toDo.id는 number타입, console.log(typeof li.id);로 확인해볼 수 있는데, li.id는 문자열 이므로 값이 일치할 수가 없음. parseInt를 통해 문자열을 숫자로 반환하면 해결됨.
}
[1,2,3,4].filter(sexyFilter);
// filter는 foreach와 비슷하게 반복하는데, 즉 sexyFilter(1), sexyFilter(2), sexyFilter(3), sexyFilter(4)가 실해된다. true라면 유지하고, flase라면 제외될 것.


function deleteTodo(event){
  const li = event.target.parentElement;
  // Button의 부모, 즉 li
  li.remove();
  // toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  // 위가 코드가 더 짧고 좋음. 공부용으로 function사용
  toDos = toDos.filter(sexyFilter);
  // localStorage에서도 제거해야 새로고침 시 적용이 되므로, 해당 filter의 id와, li의 id가 일치하는 경우 제거.
  saveTodos();
}


function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  // 하단의 newTodoObj id:Date.now()를 통한 랜덤 id 부여, 하지만 완벽한 랜덤은 아니라고 함.
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.appendChild(span);
  li.appendChild(button);

  span.innerText = newTodo.text;
  button.innerText = "X";

  toDoList.appendChild(li);
  // ul에 li추가
  button.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event){
  event.preventDefault(); 
  const newTodo = toDoInput.value;
  // 사용자가 입력한 값
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
    // 추가되는 li에 랜덤 id를 부여하기 위함.
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
  const parsedToDos = JSON.parse(savedTodos);
  // JSON.parse는 단순한 string을 array로 변경하기 위한 함수이다.
  toDos = parsedToDos;
  // JSON.parse = 문자로 나열된 항목을 array로 변경시켜주는 함수 (이것을 실행시키기 전에 JSON.stringify를 실행하여 문자로 저장하여야 함)
  parsedToDos.forEach(paintToDo);
  // forEach = parsedToDos 배열의 요소마다 paintToDo를 실행 ( 반복 )
}