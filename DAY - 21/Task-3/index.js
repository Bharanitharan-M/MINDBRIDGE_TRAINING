function event_name_validate(event_name) {
    let num_regx = /([0-9])/;
    let event_name_err = event_name.nextElementSibling;
    if (event_name.value.length < 3 || event_name.value.length > 30) {
        event_name.style.border = "1px solid red";
        event_name_err.style.display = "block";
        event_name_err.textContent = "Name Should conatins atleast 3 to 30 letters";
    } else if (num_regx.test(event_name.value)) {
        event_name.style.border = "1px solid red";
        event_name_err.style.display = "block";
        event_name_err.textContent = "Name Should not contain number";
    } else {
        event_name.style.border = "1px solid #ced4da";
        event_name_err.style.display = "none";
        return event_name.value;
    }
}
function event_date_validate(event_date) {
    let event_date_err = event_date.nextElementSibling;
    if (event_date.value.length == 0) {
        event_date.style.border = "1px solid red";
        event_date_err.style.display = "block";
        event_date_err.textContent = "fill the data";
    }
    else {
        event_date.style.border = "1px solid #ced4da";
        event_date_err.style.display = "none";
        return event_date.value;
    }

}
document.getElementById('btn').addEventListener("click", (event) => {
    event.preventDefault();
    let event_name = event_name_validate(document.getElementById('validationCustom01'));
    let event_date = event_date_validate(document.getElementById('validationCustom02'));
    let task_details = document.getElementById('task_details');
    if (event_name && event_date) {
        document.getElementById('buttons').style.display = "flex"
        let task = document.createElement('div');
        task.className = "task";
        task_details.appendChild(task);
        let content = document.createElement('div');
        content.className = 'content';
        let event_title = document.createElement('h1');
        event_title.textContent = event_name;
        content.appendChild(event_title);
        task.appendChild(content);
        let action = document.createElement('div');
        action.className = 'actions';
        let h4 = document.createElement('h4');
        h4.textContent = event_date;
        action.appendChild(h4);
        let h6 = document.createElement('h6');
        let date = event_date.split("-");
        let sdate = Number(date[2]);
        let month = Number(date[1]);
        let year = Number(date[0]);
        let today = new Date();
        let taskDate = new Date(year, month - 1, sdate);
        let taskStatus;
        if (taskDate.toDateString() === today.toDateString()) {
            taskStatus = "Present";
        }
        else if (taskDate > today) {
            taskStatus = "Upcoming";
        }
        else {
            taskStatus = "Past";
        }
        task.classList.add(taskStatus);
        h6.textContent = taskStatus;
        action.appendChild(h6);
        task.appendChild(action);
        let actions = document.createElement('div');
        actions.className = 'action'
        let button1 = document.createElement('button');
        button1.textContent = "Edit";
        let button2 = document.createElement('button');
        button2.textContent = "Delete";
        button1.setAttribute('onclick', 'edit(this)')
        button2.setAttribute('onclick', 'deletes(this)');
        actions.appendChild(button1);
        actions.appendChild(button2);
        task.appendChild(actions);
        let filter_button = document.getElementById(taskStatus);
        let show_button = document.getElementById('show');
        if(filter_button.classList.contains('active') || show_button.classList.contains('active')){
           console.log(1)
        }
        else{
            task.style.display = "none";
        }
        document.getElementsByClassName('needs-validation')[0].reset();
    }
})
function deletes(e) {
    let parent = e.parentNode.parentNode;
    parent.remove();
}
function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function edit(e) {
    let parent = e.parentNode.parentNode;
    let event_name = (document.getElementById('validationCustom01'));
    let event_date = (document.getElementById('validationCustom02'));
    event_name.value = parent.children[0].firstElementChild.textContent;
    event_date.value = formatDate(new Date(parent.children[1].firstElementChild.textContent))
    let event_name_value = event_name_validate(document.getElementById('validationCustom01'));
    let event_date_value = event_date_validate(document.getElementById('validationCustom02'));
    if (event_name_value && event_date_value) {
        parent.children[0].firstElementChild.textContent = event_name_value;
        parent.children[1].firstElementChild.textContent = event_date_value;
        let date = event_date.split("-");
        let sdate = Number(date[2]);
        let month = Number(date[1]);
        let year = Number(date[0]);
        let today = new Date();
        let taskDate = new Date(year, month - 1, sdate);
        let taskStatus;
        if (taskDate.toDateString() === today.toDateString()) {
            taskStatus = "Present";
        }
        else if (taskDate > today) {
            taskStatus = "Upcoming";
        }
        else {
            taskStatus = "Past";
        }
        parent.children[1].lastElementChild.textContent = taskStatus;
    }
}
function past(e) {
    Array.from(document.getElementById('buttons').children).forEach(element=>{
        element.classList.remove('active');
    })
    e.className = "active";
    let task = document.querySelectorAll('.task');
    if (task) {
        task.forEach(element => {
            if (element.classList.contains('Past')) {
                element.style.display = "grid";
            }
            else {
                element.style.display = "None";
            }
        });
    }
}
function present(e) {
    Array.from(document.getElementById('buttons').children).forEach(element=>{
        element.classList.remove('active');
    })
    e.className = "active";
    let task = document.querySelectorAll('.task');
    if (task) {
        task.forEach(element => {
            if (element.classList.contains('Present')) {
                element.style.display = "grid";
            }
            else {
                element.style.display = "None";
            }
        });
    }
}
function future(e) {
    Array.from(document.getElementById('buttons').children).forEach(element=>{
        element.classList.remove('active');
    })
    e.className = "active";
    let task = document.querySelectorAll('.task');
    if (task) {
        task.forEach(element => {
            if (element.classList.contains('Upcoming')) {
                element.style.display = "grid";
            }
            else {
                element.style.display = "None";
            }
        });
    }
}
function show(e) {
    Array.from(document.getElementById('buttons').children).forEach(element=>{
        element.classList.remove('active');
    })
    e.className = "active";
    let task = document.querySelectorAll('.task');
    task.forEach(element => {
        element.style.display = "grid";
    })
}
