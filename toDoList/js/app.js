// Task constructor
function Task(task) {
    this.task = task;
    this.date = new Date();
}
// UI constructor
function UI() {}

// UI add task
UI.prototype.addTask = function(task) {
    const tr = document.createElement('tr');
    const table = document.querySelector('.task-list__body');
    tr.innerHTML = `
    <td class="task-list__text">${task.task}</td>
    <td>${task.date.getDate()}.${task.date.getMonth()}.${task.date.getFullYear()}</td>
    <td><i class="fas fa-trash"></i></td>`;
    table.appendChild(tr);
}

// UI clear form after add task
UI.prototype.clearForm = function() {
    const task = document.querySelector('#toDoMessage');
    task.value = '';
}

// UI delete task
UI.prototype.deleteTask = function(target) {
    if(target.className === 'fas fa-trash') {
        target.parentElement.parentElement.remove();
    }
}
// UI show alert
UI.prototype.showAlert = function(message, className) {
    const elementExist = document.querySelector('.alert');
    if(!elementExist) {
      const addTask = document.querySelector('.add-task');
      const form = document.querySelector('.todo-form');
      const alertMessage = document.createElement('div');
      const messageText = document.createTextNode(message);
      alertMessage.appendChild(messageText);
      alertMessage.className = className;
      addTask.insertBefore(alertMessage, form);
      setTimeout(function(){
        document.querySelector('.alert').remove();
      }, 2000);
    }
}

// UI delete all tasks
UI.prototype.deleteAllTasks = function(){
  const taskList = document.querySelector('.task-list__body');
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

// UI filter tasks
UI.prototype.filterTasks = function(target) {
  const text = target.value.toLowerCase();
  const taskList = document.querySelectorAll('.task-list__text');
  taskList.forEach(function(sprawdzanyElement){
        const item = sprawdzanyElement.firstChild.textContent;
        console.log(item);
        if(item.toLowerCase().indexOf(text) != -1) {
            sprawdzanyElement.parentElement.style.display = 'table-row';
        } else {
            sprawdzanyElement.parentElement.style.display = 'none';
        }
    }
    );
}

// Event listeners
document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('.todo-form');
    const tableElement = document.querySelector('.task-list__body');
    const buttonRemove = document.querySelector('.btn--remove');
    const searchInput = document.querySelector('.task-view__search');
    const ui = new UI();

    // Form Event Listener
    form.addEventListener('submit', function(e) {
        const taskMessage = document.querySelector('#toDoMessage').value;
        const task = new Task(taskMessage);
        e.preventDefault();
        if(taskMessage === '') {
            ui.showAlert('Dodaj zadanie do listy!', 'alert alert--error');
        } else {
            ui.addTask(task);
            ui.clearForm();
            ui.showAlert('Dodałeś zadanie!', 'alert alert--succes');
        }
    });

    // Remove Task Event Listener
    tableElement.addEventListener('click', function(e){
        ui.deleteTask(e.target);
    });
    // Delete all tasks Event Listener
    buttonRemove.addEventListener('click', function(e){
        ui.deleteAllTasks();
    });

    searchInput.addEventListener('keyup', function(e){
        ui.filterTasks(e.target);
    });
});