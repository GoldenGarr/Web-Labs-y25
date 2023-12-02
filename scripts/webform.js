localStorage.setItem("tasks", JSON.stringify([]))     // default task list


let submitBtn = document.querySelector('.todo-input-submit');
let clearBtn = document.getElementById('button-clear-completed');
let selectOption = document.querySelector('#ntasks');
// let tasks = [];


submitBtn.addEventListener('click', () => {
    let selectedValue = selectOption.value;
    localStorage.setItem("n_tasks", selectedValue);

    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let todo_text = document.querySelector('.todo-input-field').value;

    if (todo_text === "") {
        alert("Пожелание не должно быть пустым");
        return;
    }

    if (tasks.length >= selectedValue) {
        alert("Количество пожеланий не может быть превышено. Удалите старые пожелания или увеличьте количество");
        return;
    }

    document.querySelector('.todo-input-field').value = "";
    tasks.push(todo_text);
    console.log(tasks);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    showTasks();
});


clearBtn.addEventListener('click', () => {
    // tasks = [];
    localStorage.setItem('tasks', JSON.stringify([]));
    showTasks();
});


function showTasks() {
    const table = document.getElementById("task-table-container");
    table.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    // let html = '';
    // tasks.forEach(task => {
    //     html += "<li>${task}</li>";
    // });
    // table.innerHTML = html;


    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);

        let task = document.createElement("div");
        task.classList.add("task_display");

        const taskContainer = document.createElement('div');
        const taskElement = document.createElement('div');
        taskElement.textContent = tasks[i];

        taskContainer.appendChild(taskElement);
        task.appendChild(taskContainer);

        const btnContainer = document.createElement('div');
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Удалить';

        (function (index) {
            removeBtn.addEventListener('click', function () {
                removeTask(index);
            });
        })(i);

        btnContainer.appendChild(removeBtn);
        task.appendChild(btnContainer);
        table.appendChild(task);
    }
}


function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    showTasks();
}
