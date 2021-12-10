var count = 0;

window.addEventListener('load', () => {
    let addTaskBtn = document.querySelector('.addTask');
    
    addTaskBtn.addEventListener('click', () => {
        addTaskToList();
    });

});

function addTaskToList(){
    let taskTextField = document.querySelector('.task');
    let taskList = document.querySelector('.taskList');
    let newTask = taskTextField.value
    
    let div = document.createElement('div');

    let label = document.createElement('label');
    label.setAttribute('for', count);

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', count);

    if(newTask != '') {
        label.innerHTML = newTask;
        div.append(checkbox, label);
        taskList.append(div);
    }

    document.addEventListener('click', () => {
        checkTask(checkbox);
    });

    count++;
}

function checkTask(el) {
    if(el.checked) {
        el.nextElementSibling.setAttribute('class', 'line-through')
    } else {
        el.nextElementSibling.setAttribute('class', '')
    }
}