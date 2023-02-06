//Acceder a los elementos del DOM
const form = document.getElementById('form-task')
const inputTask = document.getElementById('task')
const tasks = document.getElementById('tasks')

//Crear la clase Task
class Task{
   task
   constructor(task){
    this.task = task
   }
   saveTask(){
    let newTask = new Task(this.task)
    localStorage.setItem('task',JSON.stringify(newTask))
   }
   getTask(){
    let storageTask = JSON.parse(localStorage.getItem('task'))
    tasks.innerHTML+=`
        <ul><li>${storageTask.task}</li></ul>
    `
    console.log(JSON.parse(localStorage.getItem('task')))
   }
   deleteTask(){
    localStorage.removeItem('task')
   }
}

//Agregar el evento al formulario
form.addEventListener('submit', function(event){
    event.preventDefault()
    let newTask = new Task(inputTask.value)
    newTask.saveTask()
    newTask.getTask()
    event.target.reset()
})