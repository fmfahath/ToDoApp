
//getting values for the elementss
window.addEventListener('load', ()=>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    //stop refreshing page while submit the form
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Please fill out the task");
            return;
        }


         //create a new elements to add new tasks
        const task_el = document.createElement('div');     //create a div with class name="task"
        task_el.classList.add('task');
        
        const task_content_el = document.createElement('div'); //create a div with class name="content"
        task_content_el.classList.add('content'); 

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');
    
       //add new elements to the DOM
        task_el.appendChild(task_content_el);
        task_content_el.appendChild(task_input_el); 

        //add new elements - Edi, Delete buttons
        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = "Edit";

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = "Delete";

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);
        task_el.appendChild(task_action_el);
        list_el.appendChild(task_el); 

        input.value = "";
    });

   
})