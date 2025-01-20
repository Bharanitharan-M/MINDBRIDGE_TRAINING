const table_append = document.getElementById("append_element")
const form_clear = document.getElementById('form_clear');
let no_user = 1;
let user_obj = new Object;
function user_name_validate(user_name) {
    let num_regx = /([0-9])/
    user_name_err = user_name.nextElementSibling;
    if (user_name.value.length < 3 || user_name.value.length > 17) {
        user_name_err.style.display = "block";
        user_name_err.textContent = "Name Should conatins atleast 3 to 17 letters"
    }
    else if (user_name.value.length == 0) {
        user_name_err.style.display = "block";
        user_name_err.textContent = "Data should be filled"
    }
    else if (num_regx.test(user_name.value)) {
        user_name_err.style.display = "block";
        user_name_err.textContent = "Name Should not contain number"
    }
    else {
        user_name_err.style.display = "none"
        return user_name.value;
    }
}
function user_age_validate(user_age) {
    user_age_err = user_age.nextElementSibling;
    if (user_age.value < 1) {
        user_age_err.textContent = "Age should More than 0";
        user_age_err.style.display = "block";
    }
    else {
        user_age_err.style.display = "none"
        return user_age.value;
    }
}
function user_phone_num_validate(user_phone) {
    user_phone_err = user_phone.nextElementSibling;
    let num_regx = /^\d{10}$/
    if (user_phone.value.length == 0) {
        user_phone_err.textContent = "Enter the Phone number";
        user_phone_err.style.display = "block";
    }
    else if (!num_regx.test(user_phone.value)) {
        user_phone_err.textContent = "Invalid Number";
        user_phone_err.style.display = "block";
    }
    else {
        user_phone_err.style.display = "none"
        return user_phone.value;
    }
}
function user_gender_validate(user_gender) {
    let gender;
    Array.from(user_gender).forEach(element => {
        if (element.checked)
            gender = element.value;
    })
    if (gender === undefined) {
        user_gender[0].parentNode.lastElementChild.textContent = "Select Your Gender";
        user_gender[0].parentNode.lastElementChild.style.display = "block";
        return false;
    }
    else {
        user_gender[0].parentNode.lastElementChild.style.display = "none";
        return gender;
    }
}
function user_subject_validate(user_subject) {
    let subjects = [];
    Array.from(user_subject).forEach(subject => {
        if (subject.checked)
            subjects.push(subject.value);
    })
    if (subjects.length === 0) {
        user_subject[0].parentNode.parentNode.lastElementChild.textContent = "Select Atleast one subject";
        user_subject[0].parentNode.parentNode.lastElementChild.style.display = "block";
        return false;
    }

    else {
        user_subject[0].parentNode.parentNode.lastElementChild.style.display = "none";
        return subjects;

    }
}
function user_dob_validate(user_dob) {
    let regx = /^[0-9]{1,2}[-/][0-9]{1,2}[-/][0-9]{4}$/
    let user_dob_err = user_dob.nextElementSibling;
    if (!regx.test(user_dob.value)) {
        user_dob_err.style.display = "block";
        user_dob_err.textContent = "Invalid Date of Birth"
    }
    else {
        user_dob_err.style.display = "none";
        return user_dob.value;
    }
}
function user_location_validate(user_location) {
    const selectedOption = user_location.options[user_location.selectedIndex];
    return selectedOption.value;
}
function from_validate(event) {
    event.preventDefault();
    let user_name = document.querySelector("input[name = 'Name']");
    let user_age = document.querySelector("input[name = 'age']");
    let user_phone_num = document.querySelector("input[name= 'phnum']");
    let user_gender = document.querySelectorAll("input[name='gender']");
    let user_subject = document.querySelectorAll("#Subject");
    let user_DOB = document.querySelector("input[name = 'dob']");
    let user_location = document.getElementById("location");
    let user_name_value = user_name_validate(user_name);
    let user_age_value = user_age_validate(user_age);
    let user_phone_num_value = user_phone_num_validate(user_phone_num);
    let user_gender_value = user_gender_validate(user_gender);
    let user_subject_value = user_subject_validate(user_subject);
    let user_dob_value = user_dob_validate(user_DOB);
    let user_location_value = user_location_validate(user_location);

    if (user_name_value && user_age_value && user_phone_num_value && user_gender_value && user_subject_value && user_dob_value && user_location_value) {
        let user_details = [user_name_value, user_age_value, user_phone_num_value, user_gender_value, user_subject_value, user_dob_value, user_location_value]
        user_obj[no_user] = user_details;
        localStorage.setItem(no_user, JSON.stringify(user_obj[1]))
        no_user++;
        const table_row = document.createElement('tr');
        for (let i = 0; i < 8; i++) {
            const table_data = document.createElement('td');
            if (i == 4) {

                for (let j = 0; j < user_subject_value.length; j++) {
                    table_data.innerHTML += user_subject_value[j] + "<br>";
                }
            }
            else if (i == 7) {
                table_data.innerHTML = "<button onclick='edit_form(this)'>Edit</button>" + "<br>" + "<button onclick='delete_form(this)'>Delete</button>"
            }
            else {
                table_data.textContent = user_details[i];
            }
            table_row.appendChild(table_data);
        }
        table_append.appendChild(table_row);
        form_clear.reset();


    }

}
let check = 1;
function check_all(event, e) {
    event.preventDefault();
    let user_subject = document.querySelectorAll("#Subject");
    if (check == 1) {
        e.textContent = "Uncheck All"
        check = 0;
        Array.from(user_subject).forEach(subject => {
            subject.checked = true;
        })
    }
    else {
        Array.from(user_subject).forEach(subject => {
            subject.checked = false;
        })
        e.textContent = "Check All"
        check = 1;
    }
}

function delete_form(e) {
    let parent = e.parentNode.parentNode;
    parent.remove();
}
function edit_form(e) {
    let user_name = document.querySelector("input[name = 'Name']");
    let user_age = document.querySelector("input[name = 'age']");
    let user_phone_num = document.querySelector("input[name= 'phnum']");
    let user_gender = document.querySelectorAll("input[name='gender']");
    let user_subject = document.querySelectorAll("#Subject");
    let user_DOB = document.querySelector("input[name = 'dob']");
    let user_location = document.getElementById("location");
    let parent = e.parentNode.parentNode.children;
    user_name.value = parent[0].textContent;
    user_age.value = parent[1].textContent;
    user_phone_num.value = parent[2].textContent;
    user_DOB.value = parent[5].textContent;

    let gender = parent[3].textContent;
    Array.from(user_gender).forEach(element => {
        if (gender == element.value)
            element.checked = true;
    })
    let subjects = parent[4].innerHTML.trim().split("<br>");
    Array.from(user_subject).forEach(element => {
        if (subjects.some(item => item == element.value)) {
            element.checked = true;
            console.log(1);
        }
    });
    let location_value = parent[6].textContent.trim();
    Array.from(user_location.options).forEach((option) => {
        if (option.value === location_value) {
            option.selected = true;
        }
    });
    let btn = document.getElementById("update");
    let btn_submit = document.getElementById("submit")
    btn_submit.style.display = 'none';
    btn.style.display = "block"
    btn.addEventListener('click',(event)=>{
        event.preventDefault();
    let user_name = document.querySelector("input[name = 'Name']");
    let user_age = document.querySelector("input[name = 'age']");
    let user_phone_num = document.querySelector("input[name= 'phnum']");
    let user_gender = document.querySelectorAll("input[name='gender']");
    let user_subject = document.querySelectorAll("#Subject");
    let user_DOB = document.querySelector("input[name = 'dob']");
    let user_location = document.getElementById("location");
    let user_name_value = user_name_validate(user_name);
    let user_age_value = user_age_validate(user_age);
    let user_phone_num_value = user_phone_num_validate(user_phone_num);
    let user_gender_value = user_gender_validate(user_gender);
    let user_subject_value = user_subject_validate(user_subject);
    let user_dob_value = user_dob_validate(user_DOB);
    let user_location_value = user_location_validate(user_location);
    if (user_name_value && user_age_value && user_phone_num_value && user_gender_value && user_subject_value && user_dob_value && user_location_value) {
        parent[0].textContent = user_name_value;
        parent[1].textContent = user_age_value;
        parent[2].textContent = user_phone_num.value;
        parent[3].textContent = user_gender_value;
        parent[4].textContent = "";
        for (let j = 0; j < user_subject_value.length; j++) {
            parent[4].innerHTML += user_subject_value[j] + "<br>";
        }
        parent[5].textContent = user_dob_value;
        parent[6].textContent = user_location_value;
        e.textContent = "Updated";
        btn.style.display = "none";
        btn_submit.style.display = 'block';
        form_clear.reset();
    }
    })
}