const form = document.querySelector('form')
const input = document.getElementById('input-text')
const formBtn = document.getElementById('button')
const task = document.querySelector('.added-task')
const list = document.querySelector('.tasks')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(input.value.trim() === ''){
        alert('Please add a task')
        return;
    }

    const newTask = document.createElement('div')
        newTask.classList.add('item')

    const content = document.createElement('div');
    content.classList.add('content')
    // content.innerText = input.value;

    newTask.appendChild(content)
    list.appendChild(newTask)

    const taskInput = document.createElement('input')
    taskInput.classList.add('text')
    taskInput.type = 'text';
    taskInput.value = input.value
    taskInput.setAttribute('readonly', 'readonly')

    newTask.appendChild(taskInput)

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const editBtn = document.createElement('button')
    editBtn.classList.add('btn')
    editBtn.innerHTML = "Edit"

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn')
    deleteBtn.innerHTML = "Delete"

    actions.appendChild(editBtn)
    actions.appendChild(deleteBtn)

    newTask.appendChild(actions)
    list.appendChild(newTask)

    input.value = ''

    editBtn.addEventListener('click', () => {
        if(editBtn.innerText.toLowerCase() === 'edit'){
        taskInput.removeAttribute('readonly')
        taskInput.focus()
        editBtn.innerText = 'Save'
        } else{
            taskInput.setAttribute('readonly', 'readonly')
            editBtn.innerText = 'Edit'
        }
    })

    deleteBtn.addEventListener('click', () => {
        list.removeChild(newTask)
    })



    
    
        // newTask.innerHTML = `
        //             <div class="item">
        //                 <div class="content">
        //                 <input type="text" class="text" value="${input.value}" readonly/>
        //                 </div>
    
        //                 <div id="btn">
        //                     <button class="btn" id="delete">Delete</button>
        //                 </div>
        //             </div>
        // `
        // task.appendChild(newTask)
        // input.value = ``;


})

// deleteBtn.addEventListener('click', () => {
//     task.remove(newTask)
// })
