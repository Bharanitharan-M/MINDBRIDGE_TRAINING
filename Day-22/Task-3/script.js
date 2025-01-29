let task_list = [{ id: 0, title: "Final Project", task_description: "Complete the Final Project Module 1", estimate_time: ['2025', '01', '30', '14', '19'], start_now: [] ,completed: false, in_time:false}];
let id;
let today = new Date();
if (!localStorage.getItem('Task_list')) {
    localStorage.setItem('Task_list', JSON.stringify(task_list));
}
if (!localStorage.getItem('points')) {
    localStorage.setItem('points', JSON.stringify(1));
}
const task_append = document.getElementById('task_details')
function display_local_stroage() {
    let get_points = JSON.parse(localStorage.getItem('points'))
    document.getElementById('points').textContent = get_points;
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
        if(!element.completed){
        const pre_action = document.createElement('div');
        pre_action.className = 'pre_action';

        const pre_action_button1 = document.createElement('button');
        pre_action_button1.textContent = "Start Now";
        pre_action_button1.setAttribute('onclick', 'start_now(this)')
        pre_action.appendChild(pre_action_button1);

        const pre_action_button2 = document.createElement('button');
        pre_action_button2.textContent = "End Now";
        pre_action_button2.setAttribute('onclick', 'end_now(this)')
        pre_action.appendChild(pre_action_button2);
        create_task.appendChild(pre_action);

        const create_action = document.createElement('div');
        create_action.className = 'action';

        const action_h4 = document.createElement('h4');
        const dates = new Date();
        // action_h4.textContent = dates.getDate() + "/" + dates.getMonth() + 1 + "/" + dates.getFullYear() + " " + dates.getHours() + ":" + dates.getMinutes();
        create_action.appendChild(action_h4);
        const action_div = document.createElement('div');

        const comp_button = document.createElement('button');
        comp_button.textContent = "Completed";
        comp_button.setAttribute('onclick','completed(this)')
        action_div.appendChild(comp_button);

        const edit_button = document.createElement('button');
        edit_button.textContent = "Edit";
        edit_button.setAttribute('onclick', 'edit(this)')
        action_div.appendChild(edit_button);

        const delete_button = document.createElement('button');
        delete_button.textContent = "Delete";
        delete_button.setAttribute('onclick', 'deletes(this)')
        action_div.appendChild(delete_button);
        create_action.appendChild(action_div);
        create_task.appendChild(create_action);
        }
        else{
        const final_div = document.createElement('div');
        final_div.className = 'final';
        const final_h4 = document.createElement('h4');
        if(element.in_time)
        final_h4.textContent = "Completed in Time";
        else
        final_h4.textContent = "Completed after estimate time";
        final_div.appendChild(final_h4);
        create_task.appendChild(final_div);

        }
    
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
function duration(task_duration, taskDate) {
    let today = new Date();
    let task_duration_err = task_duration.nextElementSibling;
    if (task_duration.value.length == 0) {
        task_duration_err.textContent = "Filed Should Fill";
        task_duration_err.style.display = "block";
    }
    if (taskDate < today) {
        task_duration_err.textContent = "Estimate Date should not be past";
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

    let task_duration_value = task_duration.value.split(/[-T:]/)
    let date = Number(task_duration_value[2]);
    let month = Number(task_duration_value[1]);
    let year = Number(task_duration_value[0]);
    let hour = Number(task_duration_value[3])
    let minutes = Number(task_duration_value[4])
    let taskDate = new Date(year, month - 1, date, hour, minutes);

    let task_duration_v = duration(task_duration, taskDate);
    if (task_title_value && task_duration_v) {
        console.log(task_duration.value)
        let get_task_list = JSON.parse(localStorage.getItem('Task_list'));
        id = get_task_list[get_task_list.length - 1].id;
        const create_task = document.createElement('div');
        create_task.className = "task";
        create_task.classList.add(id + 1)
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
        pre_action_button1.setAttribute('onclick', 'start_now(this)')
        pre_action.appendChild(pre_action_button1);

        const pre_action_button2 = document.createElement('button');
        pre_action_button2.textContent = "End Now";
        pre_action_button2.setAttribute('onclick', 'end_now(this)')
        pre_action.appendChild(pre_action_button2);
        create_task.appendChild(pre_action);

        const create_action = document.createElement('div');
        create_action.className = 'action';

        const action_h4 = document.createElement('h4');
        const dates = new Date();
        // action_h4.textContent = dates.getDate() + "/" + dates.getMonth() + 1 + "/" + dates.getFullYear() + " " + dates.getHours() + ":" + dates.getMinutes();
        create_action.appendChild(action_h4);
        const action_div = document.createElement('div');

        const comp_button = document.createElement('button');
        comp_button.textContent = "Completed";
        comp_button.setAttribute('onclick','completed(this)')
        action_div.appendChild(comp_button);

        const edit_button = document.createElement('button');
        edit_button.textContent = "Edit";
        edit_button.setAttribute('onclick', 'edit(this)')
        action_div.appendChild(edit_button);

        const delete_button = document.createElement('button');
        delete_button.textContent = "Delete";
        delete_button.setAttribute('onclick', 'deletes(this)')
        action_div.appendChild(delete_button);
        create_action.appendChild(action_div);

        create_task.appendChild(create_action);

     

        const final_div = document.createElement('div');
        final_div.className = 'final';
        const final_h4 = document.createElement('h4');
        create_task.appendChild(final_div)

        let points = (findpoints(taskDate));
        let get_points = JSON.parse(localStorage.getItem('points')) + points;
        localStorage.setItem('points', JSON.stringify(get_points));
        document.getElementById('points').textContent = get_points;
        if (task_description.value.length != 0)
            get_task_list.push({ id: id + 1, title: task_title_value, task_description: task_description.value, estimate_time: task_duration_v.split(/[-T:]/), start_now: [], completed: false, in_time:false})
        else
            get_task_list.push({ id: id + 1, title: task_title_value, estimate_time: task_duration_v.split(/[-T:]/), start_now: [],completed: false, in_time:false })
        localStorage.setItem("Task_list", JSON.stringify(get_task_list));
    }
})

let interval;
let second;
let start_date;
let start_month;
let start_year;
let start_hour;
let start_minutes;
// start now button
function start_now(e) {
    let find_info = JSON.parse(localStorage.getItem('Task_list'));
    let today = new Date();
    let time_h4 = e.parentNode.nextElementSibling.firstElementChild
    let parent = e.parentNode.parentNode;
    let get_info_id;
    let user_est = e.parentNode.previousElementSibling.lastElementChild.textContent.split(" ")
    let user_estdate = user_est[2].split("/");
    let user_esttime = user_est[3].split(":");
    let estimate = new Date(user_estdate[2], user_estdate[1] - 1, user_estdate[0], user_esttime[0], user_esttime[1]);
    parent.className.split(" ").forEach(element => {
        element = Number(element);
        if (!isNaN(element))
            get_info_id = element;
    })

    let indexs = getinfo(get_info_id, find_info);
    let check_estimate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes());
    if (estimate > check_estimate) {
        second = today.getSeconds();
        start_date = today.getDate();
        start_month = today.getMonth()+1;
        start_year = today.getFullYear();
        start_hour = today.getHours();
        start_minutes = today.getMinutes();
        time_h4.textContent = today.getDate() + "/" + today.getMonth() + 1 + "/" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        interval = setInterval(() => {
            if (second == 60 && start_hour == 24 && start_minutes == 60 && start_month == 12 && start_date == 31 && start_year == 2025) {
                start_date = 1;
                start_month = 1;
                start_year = date.getFullYear() + 1;
                start_hour = 0;
                start_minutes = 0;
            }
            if (start_month % 2 == 0) {
                if (start_month == 2) {
                    if (start_year % 100 === 0 ? start_year % 400 === 0 : start_year % 4 === 0) {
                        if (second == 60 && start_date == 29 && start_hour == 24 && start_minutes == 60) {
                            start_date = 1;
                            start_hour = 0;
                            start_minutes = 0;
                            start_month += 1;
                        }
                    }
                    else {
                        if (second == 60 && start_date == 28 && start_hour == 24 && start_minutes == 60) {
                            start_date = 1;
                            start_hour = 0;
                            start_minutes = 0;
                            start_month += 1;
                        }
                    }
                }
                else {
                    if (second == 60 && start_date == 30 && start_hour == 24 && start_minutes == 60) {
                        start_date = 1;
                        start_hour = 0;
                        start_minutes = 0;
                        start_month += 1;
                    }
                }
            }
            else {
                if (second == 60 && start_date == 31 && start_hour == 24 && start_minutes == 60) {
                    start_date = 1;
                    start_hour = 0;
                    start_minutes = 0;
                    start_month += 1;
                }
            }
            if (second == 60 && start_minutes == 60 && start_hour == 24) {
                start_minutes = 0;
                start_hour = 0;
            }
            if (second == 60 && start_minutes == 60) {
                start_minutes = 0;
            }
            if (second == 60) {
                second = 0;
                start_minutes++;
            }
            second++;
            second = ('' + second).replace(/^(\d)$/, '0$1');
            start_date = ('' + start_date).replace(/^(\d)$/, '0$1');
            start_month = ('' + start_month).replace(/^(\d)$/, '0$1');
            start_minutes = ('' + start_minutes).replace(/^(\d)$/, '0$1');
            start_hour = ('' + start_hour).replace(/^(\d)$/, '0$1');
            time_h4.textContent = start_date + "/" + start_month + "/" + start_year + " " + start_hour + ":" + start_minutes + ":" + second;
        }, 1000)
    }
    
    else {
        alert("This task estimate time exprie");
        find_info[indexs].in_time = false;
        find_info[indexs].completed = true;
        console.log(find_info);
        localStorage.setItem('Task_list',JSON.stringify(find_info))
        e.parentNode.display.style = "None";
        e.parentNode.nextElementSibling.style.display = "None"
    }

}
// end now
function end_now(e) {
   let find_info = JSON.parse(localStorage.getItem('Task_list'));
    clearInterval(interval);
    let parent = e.parentNode.parentNode.parentNode;
    let get_info_id;
    parent.className.split(" ").forEach(element => {
        element = Number(element);
        if (!isNaN(element))
            get_info_id = element;
    })
    let indexs = getinfo(get_info_id, find_info);
    find_info[indexs].start_now = [start_date, start_month, start_year, start_hour, start_minutes, second]
    localStorage.setItem('Task_list', JSON.stringify(find_info));
}

function findpoints(taskDate) {

    let no_day = Math.round((taskDate - today) / 86400000);
    if (no_day < 4)
        return 1
    if (no_day < 7)
        return 2;
    else
        return 3;

}

function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${year}-${month}-${day} ${hour}:${minutes}`;
}


// Edit function
function edit(e) {
     let find_info = JSON.parse(localStorage.getItem('Task_list'));
    document.getElementById('click_btn').style.display = 'none';
    document.getElementById('update_btn').style.display = 'block';
    let parent = e.parentNode.parentNode.parentNode;
    console.log(parent.firstElementChild.lastElementChild)
    let get_info_id;
    parent.className.split(" ").forEach(element => {
        element = Number(element);
        if (!isNaN(element))
            get_info_id = element;
    })
    let task_title = document.querySelector("input[name= 'title']");
    let task_description = document.querySelector("textarea[name = 'description']");
    let task_duration = document.querySelector("input[name = 'estimate']");
    let indexs = getinfo(get_info_id, find_info);
    task_title.value = find_info[indexs].title;

    if (find_info[indexs].task_description)
        task_description.value = find_info[indexs].task_description;
    let formatdate_string = find_info[indexs].estimate_time[0] + "-" + find_info[indexs].estimate_time[1] + "-" + find_info[indexs].estimate_time[2] + " " + find_info[indexs].estimate_time[3] + ":" + find_info[indexs].estimate_time[4]
    task_duration.value = formatDate(new Date(formatdate_string));
    document.getElementById('update_btn').addEventListener('click', (event) => {
        event.preventDefault();
        task_title = document.querySelector("input[name= 'title']");
        task_duration = document.querySelector("input[name = 'estimate']");
        let task_title_value = title(task_title);
        let task_duration_value = duration(task_duration).split(/[-T:]/);
        if (task_title_value && task_duration_value) {
            let year = task_duration_value[0];
            let month = task_duration_value[1];
            let date = task_duration_value[2];
            let hour = task_duration_value[3];
            let minutes = task_duration_value[4];
            parent.firstElementChild.firstElementChild.textContent = task_title_value;
            parent.firstElementChild.lastElementChild.textContent = "Estimate time: " + date + "/" + month + "/" + year + " " + hour + ":" + minutes;
            find_info[indexs].title = task_title_value;
            find_info[indexs].estimate_time = task_duration_value;
            if (task_description.value.length != 0) {
                parent.firstElementChild.firstElementChild.nextElementSibling.textContent = task_description.value;
                find_info[indexs].task_description = task_description.value;
            }
            else {
                parent.firstElementChild.firstElementChild.nextElementSibling.textContent = "";
                find_info[indexs].task_description = undefined;
            }
            localStorage.setItem('Task_list', JSON.stringify(find_info));
        }
    })


}
function deletes(e) {
    let find_info = JSON.parse(localStorage.getItem('Task_list'));
    let parent = e.parentNode.parentNode.parentNode;
    let get_info_id;
    parent.className.split(" ").forEach(element => {
        element = Number(element);
        if (!isNaN(element))
            get_info_id = element;
    })
    let index = getinfo(get_info_id, find_info);
    find_info.splice(index, 1);
    localStorage.setItem('Task_list', JSON.stringify(find_info));
    let get_points = JSON.parse(localStorage.getItem('points')) - 1;
    localStorage.setItem('points', JSON.stringify(get_points));
    document.getElementById('points').textContent = get_points;
    parent.remove();
}
function getinfo(task_id, find_info) {
    let indexs = undefined;
    find_info.find((element, index) => {
        if (element.id == task_id) {
            indexs = index
            return true;
        }
    })
    if (indexs != undefined)
        return indexs;
}

// completed
function completed(e){
let find_info = JSON.parse(localStorage.getItem('Task_list'));
    let parent = e.parentNode.parentNode.parentNode;
    let get_info_id;

    let user_est = parent.firstElementChild.lastElementChild.textContent.split(" ")
   
    let user_estdate = user_est[2].split("/");
    let user_esttime = user_est[3].split(":");
    let estimate = new Date(user_estdate[2], user_estdate[1] - 1, user_estdate[0], user_esttime[0], user_esttime[1]);
    parent.className.split(" ").forEach(element => {
        element = Number(element);
        if (!isNaN(element))
            get_info_id = element;
    })

    let indexs = getinfo(get_info_id, find_info);
    find_info[indexs].start_now = [today.getDate(), today.getMonth() + 1, today.getFullYear(), today.getHours(), today.getMinutes(), today.getSeconds()]
    find_info[indexs].completed = true;
    console.log(find_info[indexs].start_now)
    let check_estimate = new Date(find_info[indexs].start_now[2], find_info[indexs].start_now[1] - 1, find_info[indexs].start_now[0], find_info[indexs].start_now[3], find_info[indexs].start_now[4]);
    let get_points;
   console.log(check_estimate)
    if(estimate - check_estimate >= 0){
      e.parentNode.innerHTML = "<h4>Completed in time</h4>";
        get_points = JSON.parse(localStorage.getItem('points')) + 1;
    localStorage.setItem('points', JSON.stringify(get_points));
    find_info[indexs].in_time = true;
    }
    else{
        e.parentNode.innerHTML = "<h4>Not Completed in time</h4>";
        get_points = JSON.parse(localStorage.getItem('points')) - 1;
        localStorage.setItem('points', JSON.stringify(get_points));
        find_info[indexs].in_time = false; 
    }
    document.getElementById('points').textContent = get_points;
    parent.firstElementChild.nextElementSibling.style.display = "None"
    localStorage.setItem('Task_list',JSON.stringify(find_info));
}

window.addEventListener("beforeunload", (event) => {
    event.returnValue = "Are you sure you want to leave?";
});
