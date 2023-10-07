let inp = document.querySelector(".inp");
const submit = document.querySelector(".submit");
const tasks = document.querySelector(".tasks");
function addTask(taskName){
    let task = document.createElement("div");
    task.classList.add("task");
    let tContainer = document.createElement("div");
    tContainer.classList.add("taskContainer");
    let circle = document.createElement("div");
    circle.classList.add("circle");
    let li = document.createElement("li");
    li.innerHTML = `<p>${taskName}</p>`
    li.classList.add("task-name")
    let btn = document.createElement("div");
    btn.classList.add("btns")
    let done = document.createElement("button");
    done.innerHTML = `<i class="fa-solid fa-check"></i>`;
    done.classList.add("done");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.classList.add("delete");
    tContainer.appendChild(circle);
    tContainer.appendChild(li);
    btn.appendChild(done);
    btn.appendChild(deleteBtn);
    task.appendChild(tContainer);
    task.appendChild(btn);
    tasks.appendChild(task);
    done.addEventListener("click",()=>{
        li.classList.add("taskDone");
        circle.classList.toggle("greenCircle")
    });
    deleteBtn.addEventListener("click",()=>{
        tasks.removeChild(task)
    })
}
submit.addEventListener("click",()=>{
    console.log(inp.value);
    addTask(inp.value);
    inp.value = "";
});
