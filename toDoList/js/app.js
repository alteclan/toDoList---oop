// Task constructor
function Task(task) {
    this.task = task;
}
// UI constructor
function UI() {}

// Event listeners
document.addEventListener('DomContentLoaded', function(){
const form = document.querySelector('.todo-form');

form.addEventListener('submit', function(e){
e.preventDefault();
alert('formularz wysłany');
});
});