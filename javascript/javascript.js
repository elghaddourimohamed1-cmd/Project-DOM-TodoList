let form = document.querySelector("#task-form");
let input = document.querySelector("#task-input");
let tsk = document.querySelector("#tasks");
let counter = document.querySelector("p");
let total = document.querySelector("#total");
let submitBtn = document.querySelector("button");
let warning = document.getElementById("input-warning");
let fname = document.getElementById("input-fname");
let clearBtn = document.querySelector("#clearAllBtn");
let creatUl = document.createElement("ul");
let createList = document.createElement("li");
let creatInput = document.createElement("input");
let taskContent = document.createElement("div");
let Tcolorstat = document.querySelector('.T-colorstat');
let Ccolorstat = document.querySelector('.C-colorstat');
let Icolorstat = document.querySelector('.I-colorstat');


function updateStats() {
    let totalTasks = tasks.length;    
    let completedTasks = tasks.filter(t => t.completed === true).length;    
    let incompleteTasks = totalTasks - completedTasks;
    if (Tcolorstat) Tcolorstat.textContent = totalTasks;
    if (Ccolorstat) Ccolorstat.textContent = completedTasks;
    if (Icolorstat) Icolorstat.textContent = incompleteTasks;   
    counting = totalTasks; 
}

let savedFullName = localStorage.getItem("FullNameSaved") || "";
// if (savedFullName) {
//   fname.value = savedFullName;
// }
fname.value = savedFullName;
    // localStorage.setItem("FullNameSaved", userFname);
    fname.addEventListener("keyup", () => {
    localStorage.setItem("FullNameSaved", fname.value.trim());
});

let tasks = JSON.parse(localStorage.getItem("tasksSaved")) || [];
let counting = tasks.length;

let retrieveTasks = localStorage.getItem("tasksSaved");
let convertToArray = JSON.parse(retrieveTasks);
if (convertToArray) {
  tasks.forEach((element, index) => {
    console.log(element);
        if (element.fname) {
        // let displayName = document.createElement("span");
        // displayName.classList.add("task-user");
        // displayName.textContent = ` By: ${element.fname} `;
        fname.textContent = ` By: ${element.fname} `;
        // displayName.style.fontSize = "0.8em";
        // displayName.style.color = "#a3a299";
        // taskContent.appendChild(displayName);
    }

    let divTask = document.createElement("div");
    divTask.classList.add("task");
    tsk.appendChild(divTask);

    let taskContent = document.createElement("div");
    taskContent.classList.add("content");
    divTask.appendChild(taskContent);

    let taskActions = document.createElement("div");
    taskActions.classList.add("actions");
    divTask.appendChild(taskActions);

    let editBotton = document.createElement("button");
    editBotton.classList.add("Edit");
    editBotton.innerHTML = `<span>Edit</span> <svg fill="#ff9c27" width="25px" height="25px" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></g></svg>`;
    taskActions.appendChild(editBotton);

    let deleteBotton = document.createElement("button");
    deleteBotton.classList.add("Delete");
    deleteBotton.innerHTML = `<span>Delete</span> <svg fill="#ed143d" width="25px" height="25px" viewBox="0 0 16.001 16.001" xmlns="http://w3.org" style="vertical-align: middle; margin-right: 5px;"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path d="M7.5 0C6.4 0 5.355.32 5.355.32L5 .428v1.683A13.88 13.88 0 0 0 2.002 3L2 4H1v1h1l.004 9c0 .439.04.788.15 1.082.111.294.311.528.563.668.503.28 1.12.25 1.953.25h5.664c.833 0 1.45.03 1.953-.25.252-.14.45-.374.56-.668.11-.294.153-.643.153-1.082l-.002-8h-1L12 14c0 .376-.04.603-.088.729-.034.09-.078.129-.11.146-.173.097-.611.125-1.468.125H4.67c-.857 0-1.295-.028-1.469-.125a.267.267 0 0 1-.113-.146v-.002c-.046-.122-.084-.348-.084-.727v-.002L3 5h11V4h-1.002L13 3a13.855 13.855 0 0 0-3-.889V.449L9.67.33S8.757 0 7.5 0zm0 1c.89 0 1.29.155 1.5.22v.739a14.05 14.05 0 0 0-1.498-.084c-.502 0-1.003.032-1.502.086v-.734C6.266 1.157 6.772 1 7.5 1zM5 6v6h1V6zm2 0v6h1V6zm2 0v6h1V6z" fill="#ed143d" font-family="Ubuntu" font-size="15" font-weight="400" letter-spacing="0" style="line-height:125%;-inkscape-font-specification:Ubuntu;text-align:center" text-anchor="middle" word-spacing="0"></path> </g> </svg>`;
    taskActions.appendChild(deleteBotton);

    let completedBotton = document.createElement("button");
    completedBotton.classList.add("Completed");
    completedBotton.innerHTML = `<span>Completed</span> <svg fill="#00c78a" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 32.15 32.15" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M31.562,5.349c-0.779-0.781-2.047-0.781-2.826,0L27.5,6.585v-2.76c0-0.829-0.671-1.5-1.5-1.5H1.5 c-0.829,0-1.5,0.671-1.5,1.5v24.5c0,0.829,0.671,1.5,1.5,1.5H26c0.829,0,1.5-0.671,1.5-1.5V12.242l4.062-4.064 C32.346,7.396,32.346,6.13,31.562,5.349z M24.5,26.825H3v-21.5h21.5v4.261l-9.614,9.615l-5.91-5.413 c-0.816-0.746-2.08-0.69-2.826,0.124c-0.746,0.815-0.69,2.08,0.124,2.826l7.321,6.706c0.383,0.352,0.867,0.525,1.351,0.525 c0.513,0,1.025-0.196,1.414-0.586l8.14-8.142V26.825L24.5,26.825z"></path> </g> </g></svg>`;
    taskActions.appendChild(completedBotton);

    let creatInput = document.createElement("input");
    creatInput.classList.add("text");
    creatInput.type = "text";
    creatInput.value = element.text;
    creatInput.setAttribute("readonly", "readonly");
    taskContent.appendChild(creatInput);

    // get current date
    let taskDate = document.createElement("span");
    taskDate.classList.add("task-date");
    taskDate.textContent = ` ${element.date} `;
    taskDate.style.fontSize = "0.8em";
    taskDate.style.color = "#f2e8cf";
    taskContent.appendChild(taskDate);

    if (element.completed) {
      creatInput.style.textDecoration = "line-through";
      creatInput.style.opacity = "0.5";
      divTask.style.backgroundColor = "#156a41";
      completedBotton.style.color = "#f2e8cf";
    }
    completedBotton.addEventListener("click", () => {
      element.completed = !element.completed;
      if (element.completed) {
        creatInput.style.textDecoration = "line-through";
        creatInput.style.opacity = "0.5";
        divTask.style.backgroundColor = "#156a41";
        completedBotton.style.color = "#f2e8cf";
      } else {
        creatInput.style.textDecoration = "none";
        creatInput.style.opacity = "1";
        divTask.style.backgroundColor = "#727167";
        completedBotton.style.color = "#00c78a";
      }
      localStorage.setItem("tasksSaved", JSON.stringify(tasks));
      updateStats();
    });

    editBotton.addEventListener("click", () => {
      if (editBotton.innerText.toLowerCase() == "edit") {
        creatInput.removeAttribute("readonly");
        creatInput.focus();
        editBotton.innerText = "Save";
        creatInput.style.textDecoration = "none";
      } else {
        creatInput.setAttribute("readonly", "readonly");
        // editBotton.innerText = "Edit";
        editBotton.innerHTML = `<span>Edit</span> <svg fill="#ff9c27" width="25px" height="25px" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></g></svg>`;
        element.text = creatInput.value;
        localStorage.setItem('tasksSaved', JSON.stringify(tasks));
      }
    });

    deleteBotton.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this task?")) {
        tsk.removeChild(divTask);
        // tasks = tasks.filter(targetToRemove => targetToRemove.text !== element.text);
        tasks.splice(index, 1);
        console.log(element);
        localStorage.setItem("tasksSaved", JSON.stringify(tasks));
        updateStats();
        // counting = tasks.length;
        // if (total) total.textContent = `Total Tasks: ${counting}`;
      }
    });
  });
}
updateStats();

form.addEventListener("submit", (e) => {
  let userInput = input.value.trim();
  let userFname = fname.value.trim();
  e.preventDefault();
  if (userInput === "") {
    // warning.style.display = 'block';
  } else {
    let today = new Date();
    let formattedDate = today.toLocaleDateString();

    let taskObject = {
      text: userInput,
      fname: userFname,
      date: formattedDate,
      completed: false,
    };
    console.log(taskObject);

    let divTask = document.createElement("div");
    divTask.classList.add("task");
    divTask.style.backgroundColor = "#727167";
    // tsk.appendChild(divTask);
    // change order where new tasks go to the top of the list
    tsk.prepend(divTask);

    let taskContent = document.createElement("div");
    taskContent.classList.add("content");
    divTask.appendChild(taskContent);

    let taskActions = document.createElement("div");
    taskActions.classList.add("actions");
    divTask.appendChild(taskActions);

    let editBotton = document.createElement("button");
    editBotton.classList.add("Edit");
    editBotton.innerHTML = `<span>Edit</span> <svg fill="#ff9c27" width="25px" height="25px" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></g></svg>`;
    taskActions.appendChild(editBotton);

    let deleteBotton = document.createElement("button");
    deleteBotton.classList.add("Delete");
    // deleteBotton.innerHTML = "Delete";
    deleteBotton.innerHTML = `<span>Delete</span> <svg fill="#ed143d" width="25px" height="25px" viewBox="0 0 16.001 16.001" xmlns="http://w3.org" style="vertical-align: middle; margin-right: 5px;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 0C6.4 0 5.355.32 5.355.32L5 .428v1.683A13.88 13.88 0 0 0 2.002 3L2 4H1v1h1l.004 9c0 .439.04.788.15 1.082.111.294.311.528.563.668.503.28 1.12.25 1.953.25h5.664c.833 0 1.45.03 1.953-.25.252-.14.45-.374.56-.668.11-.294.153-.643.153-1.082l-.002-8h-1L12 14c0 .376-.04.603-.088.729-.034.09-.078.129-.11.146-.173.097-.611.125-1.468.125H4.67c-.857 0-1.295-.028-1.469-.125a.267.267 0 0 1-.113-.146v-.002c-.046-.122-.084-.348-.084-.727v-.002L3 5h11V4h-1.002L13 3a13.855 13.855 0 0 0-3-.889V.449L9.67.33S8.757 0 7.5 0zm0 1c.89 0 1.29.155 1.5.22v.739a14.05 14.05 0 0 0-1.498-.084c-.502 0-1.003.032-1.502.086v-.734C6.266 1.157 6.772 1 7.5 1zM5 6v6h1V6zm2 0v6h1V6zm2 0v6h1V6z" fill="#ed143d" font-family="Ubuntu" font-size="15" font-weight="400" letter-spacing="0" style="line-height:125%;-inkscape-font-specification:Ubuntu;text-align:center" text-anchor="middle" word-spacing="0"></path> </g> </g></svg>`;
    taskActions.appendChild(deleteBotton);

    let completedBotton = document.createElement("button");
    completedBotton.classList.add("Completed");
    completedBotton.innerHTML = `<span>Completed</span> <svg fill="#00c78a" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 32.15 32.15" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M31.562,5.349c-0.779-0.781-2.047-0.781-2.826,0L27.5,6.585v-2.76c0-0.829-0.671-1.5-1.5-1.5H1.5 c-0.829,0-1.5,0.671-1.5,1.5v24.5c0,0.829,0.671,1.5,1.5,1.5H26c0.829,0,1.5-0.671,1.5-1.5V12.242l4.062-4.064 C32.346,7.396,32.346,6.13,31.562,5.349z M24.5,26.825H3v-21.5h21.5v4.261l-9.614,9.615l-5.91-5.413 c-0.816-0.746-2.08-0.69-2.826,0.124c-0.746,0.815-0.69,2.08,0.124,2.826l7.321,6.706c0.383,0.352,0.867,0.525,1.351,0.525 c0.513,0,1.025-0.196,1.414-0.586l8.14-8.142V26.825L24.5,26.825z"></path> </g> </g></svg>`;
    completedBotton.style.color = "#00c78a";
    taskActions.appendChild(completedBotton);

    let creatInput= document.createElement("input");
    creatInput.classList.add("text");
    creatInput.type = "text";
    creatInput.value = userInput;
    creatInput.setAttribute("readonly", "readonly");
    taskContent.appendChild(creatInput);

    // get current date
    let taskDate = document.createElement("span");
    taskDate.classList.add("task-date");
    taskDate.textContent = ` ${formattedDate} `;
    taskDate.style.fontSize = "0.8em";
    taskDate.style.color = "#f2e8cf";
    taskContent.appendChild(taskDate);

    completedBotton.addEventListener("click", () => {
    taskObject.completed = !taskObject.completed;
    if (taskObject.completed) {
        creatInput.style.textDecoration = "line-through";
        creatInput.style.opacity = "0.5";
        divTask.style.backgroundColor = "#156a41";
        completedBotton.style.color = "#f2e8cf";
    } else {
        creatInput.style.textDecoration = "none";
        creatInput.style.opacity = "1";
        divTask.style.backgroundColor = "#727167";
        completedBotton.style.color = "#00c78a";
    }
    localStorage.setItem("tasksSaved", JSON.stringify(tasks));
    updateStats();
    });

    editBotton.addEventListener("click", () => {
    if (editBotton.innerText.toLowerCase() == "edit") {
        creatInput.removeAttribute("readonly");
        creatInput.focus();
        editBotton.innerText = "Save";
        creatInput.style.textDecoration = "none";
    } else {
        creatInput.setAttribute("readonly", "readonly");
        // editBotton.innerText = "Edit";
        editBotton.innerHTML = `<span>Edit</span> <svg fill="#ff9c27" width="25px" height="25px" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></g></svg>`;
        taskObject.text = creatInput.value;
        localStorage.setItem('tasksSaved', JSON.stringify(tasks));
    }
    });

    deleteBotton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
        tsk.removeChild(divTask);
        // tasks = tasks.filter((targetToRemove) => targetToRemove.text !== element.text,);
        // console.log(element);
        let targetIndex = tasks.indexOf(taskObject); 
        tasks.splice(targetIndex, 1);
        localStorage.setItem("tasksSaved", JSON.stringify(tasks));
        updateStats();

        // counting = tasks.length;
        // if (total) total.textContent = `Total Tasks: ${counting}`;
    }
    });

    counting++;
    // tasks.push(taskObject);
    // change order where new tasks go to the top of the list
    tasks.unshift(taskObject);
    localStorage.setItem("tasksSaved", JSON.stringify(tasks));
    updateStats();
    input.value = "";
    }

    input.addEventListener("keyup", (event) => {
    if (input.value !== "") {
      // liveTyping.style.display ='block';
      // liveTyping.style.color ='blue';
      // liveTyping.textContent = "User is typing..."
    } else {
    //   liveTyping.style.display = "none";
    }
    });
});

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("tasksSaved");
    tsk.innerHTML = "";
    tasks = [];
    updateStats();
//   counting = 0;
//   counter.textContent = `Total Tasks: ${counting}`;
});
