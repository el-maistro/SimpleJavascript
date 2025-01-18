let tasks = [];

const btnAdd = document.getElementById("addTask");
const divTasks = document.getElementById("tasks-div");

btnAdd.addEventListener("click", () => {
    const task = document.getElementById("task");
    
    if(task.value !== ""){
        tasks.push({
            task: task.value, 
            done: false});
        mostrarTareas();
        task.value = "";
    } else {
        window.alert("Debe ingresar al menos una letra!!!");
    }
});


function mostrarTareas(){
    const htmlLista = tasks.map( (task) => {
        return `<tr><td>${task.done ? `<s>${task.task}</s>` : task.task}</td><td><button class="btnHecho" data-id="${task.task}">Hecho</button>&nbsp;<button class="btnBorrar" data-id="${task.task}">Borrar</button></td></tr>`;
    }).join('');

    divTasks.innerHTML = `<table style="width:40%;">${htmlLista}</table>`;

    targetBtns();
}

function targetBtns(){
    const btnsBorrar = document.querySelectorAll(".btnBorrar");
    const btnsHecho = document.querySelectorAll(".btnHecho");

    btnsBorrar.forEach( (btn) => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.dataset.id;
            tasks = tasks.filter( (task) => {
                return task.task !== id;
            });
            mostrarTareas();
        });
    });

    btnsHecho.forEach( (btn) => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.dataset.id;
            tasks = tasks.map( (task) => {
                if(task.task === id){
                    task.done = true;
                }
                return task;
            });

            mostrarTareas();
        });
    });
}
