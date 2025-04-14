const TodoInp = document.querySelector("#TodoInp");
const addTodoForm = document.querySelector("#addTodoForm");

const ToDos = [
  { id: 0, todo: "8:00 Oyan", isCompleted: true },
  { id: 1, todo: "Derse get", isCompleted: false },
  { id: 2, todo: "Dersden sonra kursa get", isCompleted: false },
  { id: 3, todo: "Tapsiriqlari yaz", isCompleted: false },
];

const showTodos = (arr) => {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  arr.forEach((item, index, arr) => {
    tbody.innerHTML += `<tr class="${
      item.isCompleted ? "completed" : "notCompleted"
    }">
              <td>${item.todo}</td>
              <td><input type="checkbox" ${
                item.isCompleted ? "checked" : null
              } onchange="setCompleted('${item.id}')"/></td>
              <td>
                <button onclick="editTodo('${item.id}')">edit</button>
                <button onclick="deleteTodo('${item.id}')">delete</button>
              </td>
            </tr>`;
     });
};

const setCompleted = (id) => {
  ToDos.map((item) => {
    if (item.id == id) {
      item.isCompleted = !item.isCompleted;
    }
  });
  showTodos(ToDos);
};

const deleteTodo = (id) => {
  const isAgree = confirm("silmək istədiyinizə əminsiniz?");
  if (isAgree) {
    ToDos.forEach((item, index) => {
      if (item.id == id) {
        ToDos.splice(index, 1);
      }
    });
    showTodos(ToDos);
  }
};

const editTodo = (id) => {
  ToDos.map((item) => {
    if (item.id == id) {
      const newTodo = prompt("deyisdirin", item.todo);
      if (newTodo) {
        item.todo = newTodo;
        showTodos(ToDos);
      } else {
        alert("duz emelli yaz!");
      }
    }
  });
};

const adNewTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    id: new Date().getTime(),
    todo: TodoInp.value,
    isCompleted: false,
  };
  ToDos.unshift(newTodo);
  showTodos(ToDos);
  TodoInp.value = "";
};

addTodoForm.addEventListener("submit", adNewTodo);
showTodos(ToDos);