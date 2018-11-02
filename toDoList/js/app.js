// Task constructor
function Task(task) {
    this.task = task;
}
// UI constructor
function UI() {}

// UI add task
UI.prototype.addTask = function(taskMessage) {
const tr = document.createElement('tr');
const table = document.querySelector('.task-list');
tr.innerHTML = `
<td>${taskMessage}</td>
<td>Dzisiejsza data</td>
<td><i class="fas fa-trash"></i></td>`;
table.appendChild(tr);

}
// Event listeners
document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('.todo-form');
    const ui = new UI();
    form.addEventListener('submit', function(e) {
        const taskMessage = document.querySelector('#toDoMessage').value;
        e.preventDefault();
        ui.addTask(taskMessage);
    });
});