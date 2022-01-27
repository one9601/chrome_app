const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODOS_KEY ="todos";

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// JSON.stringify() == 문자로 저장

function sexyFilter(toDo){
  return toDo.id !== parseInt(li.id);
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveTodos();
}


function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.appendChild(span);
  li.appendChild(button);

  span.innerText = newTodo.text;
  button.innerText = "X";

  toDoList.appendChild(li);
  button.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event){
  event.preventDefault(); 
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//   console.log("This is ", item);
//   // item == array의 아이템들
// }

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  // JSON.parse = 문자로 나열된 항목을 array로 변경시켜주는 함수 (이것을 실행시키기 전에 JSON.stringify를 실행하여 문자로 저장하여야 함)
  parsedToDos.forEach(paintToDo);

  // forEach = array에 대한 function을 실행시키는 함수
}