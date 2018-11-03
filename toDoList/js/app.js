// Task constructor
function Task(task) {
    this.task = task;
}
// UI constructor
function UI() {}

// UI add task
UI.prototype.addTask = function(task) {
    const tr = document.createElement('tr');
    const table = document.querySelector('.task-list__body');
    tr.innerHTML = `
    <td>${task.task}</td>
    <td>Dzisiejsza data</td>
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
// Event listeners
document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('.todo-form');
    const tableElement = document.querySelector('.task-list__body');
    const ui = new UI();
    // Form Event Listener
    form.addEventListener('submit', function(e) {
        const taskMessage = document.querySelector('#toDoMessage').value;
        const task = new Task(taskMessage);
        e.preventDefault();
        ui.addTask(task);
        ui.clearForm();
    });
    // Remove Task Event Listener
    tableElement.addEventListener('click', function(e){
        ui.deleteTask(e.target);
    });
});