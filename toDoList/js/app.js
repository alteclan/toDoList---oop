// Task constructor
function Task(task) {
    this.task = task;
}
// UI constructor
function UI() {}

// UI add task
UI.prototype.addTask = function(task) {
    const tr = document.createElement('tr');
    const table = document.querySelector('.task-list');
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


// Event listeners
document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('.todo-form');
    const ui = new UI();
    form.addEventListener('submit', function(e) {
        const taskMessage = document.querySelector('#toDoMessage').value;
        const task = new Task(taskMessage);
        e.preventDefault();
        ui.addTask(task);
        ui.clearForm();
    });
});