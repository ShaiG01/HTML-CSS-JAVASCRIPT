const container = document.querySelector('.container');
const createNew = document.querySelector('.create');
const toggle = document.querySelector('.toggle')
const body = document.querySelector('body')
const xBtn = document.querySelector('.x')
const overlay = document.querySelector('.overlay')
const overlayInput = document.querySelector('.overlayInput')
const addNewBtn = document.querySelector('.addNew')
const nextPage = document.querySelector('.nextPage')
const firstPage = document.querySelector('.firstPage')
const Return = document.querySelector('.goBack')
const taskInput = document.querySelector('.taskInput')
const newTask = document.querySelector(".newTask")
const taskContainer = document.querySelector(".taskContainer")
const enter = document.querySelector(".enter")
const check = document.querySelector(".check")
const remove = document.querySelector('.remove')
const containerTask = document.querySelector('.containerTask')
toggle.addEventListener('click', toggleBtn)

window.addEventListener("DOMContentLoaded", () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => appendNewTask(task, false)); // false = don't re-save
});

function toggleBtn() {
    body.classList.toggle('dark');
    const rotation = parseInt(getComputedStyle(container).getPropertyValue('--rotation')) || 0
    container.style.setProperty("--rotation", `${rotation + 180}deg`)
}

createNew.addEventListener('click', () => {
    nextPage.classList.remove('inactive')
    firstPage.classList.add('inactive')
    

});

Return.addEventListener('click', () => {
    nextPage.classList.add('inactive')
    firstPage.classList.remove('inactive')
    

});



addNewBtn.addEventListener('click', ()=>{
    const currentScale = parseInt(getComputedStyle(overlayInput).getPropertyValue('--scale')) || 0;
    overlayInput.style.setProperty('--scale', `${currentScale + 1}`)
    overlay.classList.add('hide')
})

xBtn.addEventListener('click', ()=>{
     const currentScale = parseInt(getComputedStyle(overlayInput).getPropertyValue('--scale')) || 0;
    overlayInput.style.setProperty('--scale', `${currentScale - 1}`)
    overlay.classList.remove('hide')
})


enter.addEventListener('click', ()=>{
    let taskValue = taskInput.value
    const currentScale = parseInt(getComputedStyle(overlayInput).getPropertyValue('--scale')) || 0;
    overlayInput.style.setProperty('--scale', `${currentScale - 1}`)
    overlay.classList.remove('hide')
    appendNewTask(taskValue)
})

remove.addEventListener('click', ()=>{
    clear(containerTask)
})

containerTask.addEventListener('click', (event) => {
    if (event.target.classList.contains('check')) {
        const parent = event.target.parentElement;
        const taskText = parent.childNodes[0].nodeValue.trim();

         setTimeout(() => {
            containerTask.removeChild(parent);

           
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks = tasks.filter(task => task !== taskText);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }, 1000);
    }
});

function appendNewTask(task, shouldSave = true) {
    const New = document.createElement('div');
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.classList.add('check');

    New.innerText = task;
    New.classList.add('newTask');
    containerTask.appendChild(New);
    New.appendChild(checkBox);

    if (shouldSave) {
        saveTask(task);
    }
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clear(container){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    localStorage.removeItem("tasks"); // ✅ clear saved tasks too
}