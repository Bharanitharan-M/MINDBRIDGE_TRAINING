let task_list = [{ id: 0,title: "Final Project", task_description: "Complete the Final Project Module 1", estimate_time: ['2025', '01', '30', '14', '19'] }];
let id;
if (!localStorage.getItem('Task_list')) {
    localStorage.setItem('Task_list', JSON.stringify(task_list));
}
const task_append = document.getElementById('task_details')
function display_local_stroage() {
    let local = JSON.parse(localStorage.getItem('Task_list'));
    local.forEach(element => {
        const create_task = document.createElement('div');
        create_task.className = "task";
        create_task.classList.add(element.id);
        task_append.append(create_task);

        const task_content = document.createElement('div');
        task_content.className = "content";

        const content_h1 = document.createElement('h1');
        content_h1.textContent = element.title;
        task_content.appendChild(content_h1);

        if (element.task_description) {
            const content_p = document.createElement('p');
            content_p.textContent = element.task_description;
            task_content.appendChild(content_p);
        }

        const content_h5 = document.createElement('h5');
        content_h5.textContent = "Estimate time: " + element.estimate_time[2] + "/" + element.estimate_time[1] + "/" + element.estimate_time[0] + " " + element.estimate_time[3] + ":" + element.estimate_time[4];
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
        action_h4.textContent = dates.getDate() + "/" + dates.getMonth() + 1 + "/" + dates.getFullYear() + " " + dates.getHours() + ":" + dates.getMinutes();
        create_action.appendChild(action_h4);
        const action_div = document.createElement('div');

        const comp_button = document.createElement('button');
        comp_button.textContent = "Completed";
        action_div.appendChild(comp_button);

        const edit_button = document.createElement('button');
        edit_button.textContent = "Edit";
        edit_button.setAttribute('onclick','edit(this)')
        action_div.appendChild(edit_button);

        const delete_button = document.createElement('button');
        delete_button.textContent = "Delete";
        delete_button.setAttribute('onclick','deletes(this)')
        action_div.appendChild(delete_button);
        create_action.appendChild(action_div);

        create_task.appendChild(create_action);
    });
}
display_local_stroage();
function title(task_title) {
    let task_title_err = task_title.nextElementSibling;
    if (task_title.value.length == 0) {
        task_title_err.textContent = "Filed Should Fill";
        task_title_err.style.display = "block";
    }
    else {
        task_title_err.style.display = "none";
        return task_title.value;
    }
}
function duration(task_duration) {
    let task_duration_err = task_duration.nextElementSibling;
    if (task_duration.value.length == 0) {
        task_duration_err.textContent = "Filed Should Fill";
        task_duration_err.style.display = "block";
    }
    else {
        task_duration_err.style.display = "none";
        return task_duration.value;
    }
}
document.getElementById('click_btn').addEventListener('click', (event) => {
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

    if (task_title_value && task_duration_value) {
        console.log(task_duration.value)
        let get_task_list = JSON.parse(localStorage.getItem('Task_list'));
        id= get_task_list[get_task_list.length-1].id;
        const create_task = document.createElement('div');
        create_task.className = "task";
        create_task.classList.add(id+1)
        task_append.append(create_task);

        const task_content = document.createElement('div');
        task_content.className = "content";

        const content_h1 = document.createElement('h1');
        content_h1.textContent = task_title_value;
        task_content.appendChild(content_h1);

        if (task_description.value.length != 0) {
            const content_p = document.createElement('p');
            content_p.textContent = task_description.value;
            task_content.appendChild(content_p);
        }

        const content_h5 = document.createElement('h5');
        content_h5.textContent = "Estimate time: " + date + "/" + month + "/" + year + " " + hour + ":" + minutes;
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
        action_h4.textContent = dates.getDate() + "/" + dates.getMonth() + 1 + "/" + dates.getFullYear() + " " + dates.getHours() + ":" + dates.getMinutes();
        create_action.appendChild(action_h4);
        const action_div = document.createElement('div');

        const comp_button = document.createElement('button');
        comp_button.textContent = "Completed";
        action_div.appendChild(comp_button);

        const edit_button = document.createElement('button');
        edit_button.textContent = "Edit";
        edit_button.setAttribute('onclick','edit(this)')
        action_div.appendChild(edit_button);

        const delete_button = document.createElement('button');
        delete_button.textContent = "Delete";
        delete_button.setAttribute('onclick','deletes(this)')
        action_div.appendChild(delete_button);
        create_action.appendChild(action_div);

        create_task.appendChild(create_action);
       
        if (task_description.value.length != 0)
            get_task_list.push({ id:id+1,title: task_title_value, task_description: task_description.value, estimate_time: task_duration_value })
        else
            get_task_list.push({ id:id+1,title: task_title_value, estimate_time: task_duration_value })
        localStorage.setItem("Task_list", JSON.stringify(get_task_list));
    }
})

function formatDate(date) {
    
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let hour = date.getHours();
    return `${year}-${month}-${day} `;
}
let find_info = JSON.parse(localStorage.getItem('Task_list'));
// Edit function
function edit(e){
    let parent = e.parentNode.parentNode.parentNode;
    let get_info_id;
    parent.className.split(" ").forEach(element=>{
        element = Number(element);
        if(!isNaN(element))
            get_info_id = element;
    })
    let task_title = document.querySelector("input[name= 'title']");
    let task_description = document.querySelector("textarea[name = 'description']");
    let task_duration = document.querySelector("input[name = 'estimate']");
    let indexs = getinfo(get_info_id,find_info);
    task_title.value = find_info[indexs].title;
    if(find_info[indexs].task_description)
        task_description.value = find_info[indexs].task_description;
    let formatdate_string = find_info[indexs].estimate_time[0]+"-"+find_info[indexs].estimate_time[1]+"-"+find_info[indexs].estimate_time[2]+" "+find_info[indexs].estimate_time[3]+":"+find_info[indexs].estimate_time[4]
    formatDate(new Date(formatdate_string))

}
function deletes(e){
    let parent = e.parentNode.parentNode.parentNode;
    let get_info_id;
    parent.className.split(" ").forEach(element=>{
        element = Number(element);
        if(!isNaN(element))
            get_info_id = element;
    })
    let index = getinfo(get_info_id,find_info);
    find_info.splice(index,1);
    localStorage.setItem('Task_list',JSON.stringify(find_info));
    parent.remove();
}
function getinfo(task_id,find_info){
    let indexs = undefined;
    find_info.find((element,index)=>{
        if(element.id == task_id){
            indexs = index
            return true;
        }
    })
    if(indexs != undefined)
        return indexs; 
}