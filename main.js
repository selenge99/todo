// DOM ELEMEMTS
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");
const add = document.getElementById("add");
console.log(add)

//  Davtlaga 

const nemeh = document.getElementById("nemeh");
console.log(nemeh)
const hasah = document.getElementById("hasah");
console.log(hasah)
const change = document.getElementsByClassName("change")[0];
console.log(change)

let a = 10
nemeh.addEventListener("click", ()=>{
a++;
change.innerText=a;
console.log(a);
})


hasah.addEventListener("click",()=>{
    a--;
    change.innerText=a;
    console.log(a)
})



// VARIABLES FOR TASK
let isEdited = false;
let editedIndex = -1;
const tasks = [
  {
    name: "Task Two",
    status: "INPROGRESS",
  },
  {
    name: "Task Three",
    status: "BLOCKED",
  },
];

function zurah() {
  taskTodoList.innerHTML = "";
  taskProgressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    console.log("TASKS", tasks);
    let borderColor = "";
    switch (tasks[i].status) {
        case "TODO": {
            borderColor = "";
          break;
        }
        case "INPROGRESS": {
            borderColor = "border-warning";
          break;
        }
        case "DONE": {
          borderColor = "border-success"
          break;
        }
        case "BLOCKED": {
          borderColor = "border-danger"
          break;
        }
        default: {
          console.log("ALDAA GARLAA");
        }
      }
    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center border border-1 rounded p-2 ${borderColor}">
    <span>${tasks[i].name}</span>
    <div>
        <button data-bs-toggle="modal"
          data-bs-target="#taskModal" class="btn" data-bs-toggle="modal" data-bs-target="#taskModal" onclick="taskEdit(${i})">
        <i class="bi bi-pencil"></i>
        </button>
        <button class="btn" onclick="deleteTask(${i})">
            <i class="bi bi-trash"></i>
        </button>
    </div>
    </div>
 `;

    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newTaskCard;
        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }

  }
}

zurah();



saveBtn.addEventListener("click", function  () {
  if (isEdited){
    tasks[editedIndex].name = taskInput.value
    tasks[editedIndex].status = taskStatus.value
    isEdited = false;
  } else {
    const newTask = {
      name: taskInput.value,
      status: taskStatus.value,
  };
  tasks.push(newTask); 
    };
    taskInput.value = "";
    taskStatus.value = "TODO"
    zurah();
  });




const deleteTask = (taskIndex) => {
    console.log(tasks);
    tasks.splice(taskIndex,1);
    zurah();
    console.log("Task deleted", taskIndex);
}

const taskEdit = (taskIndex) => {
    console.log(taskIndex);
    taskInput.value = tasks[taskIndex].name;
    taskStatus.value = tasks[taskIndex].status;

   isEdited = true;
   editedIndex = taskIndex;
}