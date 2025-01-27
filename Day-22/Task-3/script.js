let task_list = [];

const task_append = document.getElementById('task_details')
function title(task_title){
    let task_title_err = task_title.nextElementSibling;
    if(task_title.value.length == 0){
        task_title_err.textContent = "Filed Should Fill";
        task_title_err.style.display = "block";
    }
    else{
        task_title_err.style.display = "none";
        return task_title.value; 
    }
}
function duration(task_duration){
    let task_duration_err = task_duration.nextElementSibling;
    if(task_duration.value.length == 0){
        task_duration_err.textContent = "Filed Should Fill";
        task_duration_err.style.display = "block";
    }
    else{
        task_duration_err.style.display = "none";
        return task_duration.value; 
    }
}
document.getElementById('click_btn').addEventListener('click',(event)=>{
    event.preventDefault();
    let task_title = document.querySelector("input[name= 'title']");
    let task_description = document.querySelector("textarea[name = 'description']");
    let task_duration = document.querySelector("input[name = 'estimate']");
    let task_title_value = title(task_title);
    let task_duration_value = duration(task_duration).split(/[-T:]/)
    let year = task_duration_value[0];
    let month = task_duration_value[1];
    let date = task_duration_value[2];
    let hour = task_duration_value[3];
    let minutes = task_duration_value[4];

    if(task_title_value && task_duration_value){
        const create_task = document.createElement('div');
        create_task.className = "task";
        task_append.append(create_task);

        const task_content = document.createElement('div');
        task_content.className = "content";
        
        const content_h1 = document.createElement('h1');
        content_h1.textContent = task_title_value;
        task_content.appendChild(content_h1);

        if(task_description.value.length != 0){
        const content_p = document.createElement('p');
        content_p.textContent = task_description.value;
        task_content.appendChild(content_p);
        }

        const content_h5 = document.createElement('h5');
        content_h5.textContent = "Estimate time: "+date+"/"+month+"/"+year+" "+hour+":"+minutes;
        task_content.appendChild(content_h5)
        create_task.append(task_content);

        const pre_action = document.createElement('div');
        pre_action.className = 'pre_action';

        const pre_action_button1 = document.createElement('button');
        pre_action_button1.textContent = "Start Now";
        pre_action.appendChild(pre_action_button1);

        const pre_action_button2 = document.createElement('button');
        pre_action_button2.textContent = "End Now";
        pre_action.appendChild(pre_action_button2);
        create_task.appendChild(pre_action);

        const create_action = document.createElement('div');
        create_action.className = 'action';

        const action_h4 = document.createElement('h4');
        const dates = new Date();    
        action_h4.textContent = dates.getDate()+"/"+dates.getMonth()+1+"/"+dates.getFullYear()+" "+dates.getHours()+":"+dates.getMinutes();
        create_action.appendChild(action_h4);
        const action_div = document.createElement('div');
       
        const comp_button = document.createElement('button');
        comp_button.textContent = "Completed";
        action_div.appendChild(comp_button);

        const edit_button = document.createElement('button');
        edit_button.textContent = "Edit";
        action_div.appendChild(edit_button);

        const delete_button = document.createElement('button');
        delete_button.textContent = "Delete";
        action_div.appendChild(delete_button);
        create_action.appendChild(action_div);
        
        create_task.appendChild(create_action);
        
    }
    
})