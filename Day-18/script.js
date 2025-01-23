const table_append = document.getElementById("append_element");
const form_clear = document.getElementById("form_clear");
let check = 1;
let user_details = [];
if (!localStorage.getItem("User_details"))
  localStorage.setItem("User_details", JSON.stringify(user_details));
if (localStorage.getItem("User_details")) {
  let get_user = JSON.parse(localStorage.getItem("User_details"));
  for (let i = 0; i < get_user.length; i++) {
    const table_row = document.createElement("tr");
    table_row.innerHTML = `<td>${get_user[i].name}</td>
            <td>${get_user[i].age}</td>
            <td>${get_user[i].phone_number}</td>
            <td>${get_user[i].gender}</td>`;
    const table_data = document.createElement("td");
    for (let j = 0; j < get_user[i].subjects.length; j++) {
      table_data.innerHTML += get_user[i].subjects[j] + "<br>";
    }
    table_row.appendChild(table_data);
    table_row.innerHTML += `<td>${get_user[i].DOB}</td>
        <td>${get_user[i].location}</td>
        <td><button onclick='edit_form(this)'>Edit</button><br><button onclick='delete_form(this)'>Delete</button></td>`;
    table_append.appendChild(table_row);
  }
}

function user_name_validate(user_name) {
  let num_regx = /([0-9])/;
  let user_name_err = user_name.nextElementSibling;
  if (user_name.value.length < 3 || user_name.value.length > 17) {
    user_name_err.style.display = "block";
    user_name_err.textContent = "Name Should conatins atleast 3 to 17 letters";
  } else if (user_name.value.length == 0) {
    user_name_err.style.display = "block";
    user_name_err.textContent = "Data should be filled";
  } else if (num_regx.test(user_name.value)) {
    user_name_err.style.display = "block";
    user_name_err.textContent = "Name Should not contain number";
  } else {
    user_name_err.style.display = "none";
    return user_name.value;
  }
}
function user_age_validate(user_age) {
  let user_age_err = user_age.nextElementSibling;
  if (user_age.value < 1) {
    user_age_err.textContent = "Age should More than 0";
    user_age_err.style.display = "block";
  } else {
    user_age_err.style.display = "none";
    return user_age.value;
  }
}
function user_phone_num_validate(user_phone) {
  let user_phone_err = user_phone.nextElementSibling;
  let num_regx = /^\d{10}$/;
  if (user_phone.value.length == 0) {
    user_phone_err.textContent = "Enter the Phone number";
    user_phone_err.style.display = "block";
  } else if (!num_regx.test(user_phone.value)) {
    user_phone_err.textContent = "Invalid Number";
    user_phone_err.style.display = "block";
  } else {
    user_phone_err.style.display = "none";
    return user_phone.value;
  }
}
function user_gender_validate(user_gender) {
  let gender;
  Array.from(user_gender).forEach((element) => {
    if (element.checked) gender = element.value;
  });
  if (gender === undefined) {
    user_gender[0].parentNode.lastElementChild.textContent =
      "Select Your Gender";
    user_gender[0].parentNode.lastElementChild.style.display = "block";
    return false;
  } else {
    user_gender[0].parentNode.lastElementChild.style.display = "none";
    return gender;
  }
}
function user_subject_validate(user_subject) {
  let subjects = [];
  Array.from(user_subject).forEach((subject) => {
    if (subject.checked) subjects.push(subject.value);
  });
  if (subjects.length === 0) {
    user_subject[0].parentNode.parentNode.lastElementChild.textContent =
      "Select Atleast one subject";
    user_subject[0].parentNode.parentNode.lastElementChild.style.display =
      "block";
    return false;
  } else {
    user_subject[0].parentNode.parentNode.lastElementChild.style.display =
      "none";
    return subjects;
  }
}
function user_dob_validate(user_dob) {
  let regx = /^[0-9]{1,2}[-/][0-9]{1,2}[-/][0-9]{4}$/;
  let user_dob_err = user_dob.nextElementSibling;
  if (!regx.test(user_dob.value)) {
    user_dob_err.style.display = "block";
    user_dob_err.textContent = "Invalid Date of Birth";
  } else {
    user_dob_err.style.display = "none";
    return user_dob.value;
  }
}
function user_location_validate(user_location) {
  let user_location_err = user_location.parentNode.lastElementChild;
  console.log(user_location_err);
  const selectedOption = user_location.options[user_location.selectedIndex];
  if (selectedOption.value == "None") {
    user_location_err.style.display = "block";
    user_location_err.textContent = "Please select the loaction";
  } else {
    user_location_err.style.display = "none";
    return selectedOption.value;
  }
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

  if (
    user_name_value &&
    user_age_value &&
    user_phone_num_value &&
    user_gender_value &&
    user_subject_value &&
    user_dob_value &&
    user_location_value
  ) {
    let user_access = {
      name: user_name_value,
      age: user_age_value,
      phone_number: user_phone_num_value,
      gender: user_gender_value,
      subjects: user_subject_value,
      DOB: user_dob_value,
      location: user_location_value,
    };
    const table_row = document.createElement("tr");
    table_row.innerHTML = `<td>${user_access.name}</td>
            <td>${user_access.age}</td>
            <td>${user_access.phone_number}</td>
            <td>${user_access.gender}</td>`;
    const table_data = document.createElement("td");
    for (let j = 0; j < user_subject_value.length; j++) {
      table_data.innerHTML += user_subject_value[j] + "<br>";
    }
    table_row.appendChild(table_data);
    table_row.innerHTML += `<td>${user_access.DOB}</td>
        <td>${user_access.location}</td>
        <td><button onclick='edit_form(this)'>Edit</button><br><button onclick='delete_form(this)'>Delete</button></td>`;
    table_append.appendChild(table_row);
    let get_user_details = JSON.parse(localStorage.getItem("User_details"));
    get_user_details.push(user_access);
    localStorage.setItem("User_details", JSON.stringify(get_user_details));
    form_clear.reset();
    var btn = (document.getElementById("btn1").textContent = "Check All");
  }
}

function check_all(event, e) {
  event.preventDefault();
  let user_subject = document.querySelectorAll("#Subject");
  if (check == 1) {
    e.textContent = "Uncheck All";
    check = 0;
    Array.from(user_subject).forEach((subject) => {
      subject.checked = true;
    });
  } else {
    Array.from(user_subject).forEach((subject) => {
      subject.checked = false;
    });
    e.textContent = "Check All";
    check = 1;
  }
}

function delete_form(e) {
  let chid = e.parentNode.parentNode.children;
  let parent = e.parentNode.parentNode;
  let user_name = chid[0].textContent;
  get_info(user_name).then((details) => {
    let [user_details, index] = details;
    user_details.splice(index, 1);
    localStorage.setItem("User_details", JSON.stringify(user_details));
    parent.remove();
  });
}
let btn_click = true;
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
  Array.from(user_gender).forEach((element) => {
    if (gender == element.value) element.checked = true;
  });
  let subjects = parent[4].innerHTML.trim().split("<br>");
  Array.from(user_subject).forEach((element) => {
    if (subjects.some((item) => item == element.value)) {
      element.checked = true;
    }
  });
  let location_value = parent[6].textContent.trim();
  Array.from(user_location.options).forEach((option) => {
    if (option.value === location_value) {
      option.selected = true;
    }
  });
  let btn = document.getElementById("update");
  let btn_submit = document.getElementById("submit");

  btn.style.display = "block";
  btn_submit.style.display = "none";
  if (btn_click) {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(btn_click);
      let user_name_value = user_name_validate(user_name);
      let user_age_value = user_age_validate(user_age);
      let user_phone_num_value = user_phone_num_validate(user_phone_num);
      let user_gender_value = user_gender_validate(user_gender);
      let user_subject_value = user_subject_validate(user_subject);
      let user_dob_value = user_dob_validate(user_DOB);
      let user_location_value = user_location_validate(user_location);
      if (
        user_name_value &&
        user_age_value &&
        user_phone_num_value &&
        user_gender_value &&
        user_subject_value &&
        user_dob_value &&
        user_location_value
      ) {
        parent[0].textContent = user_name_value;
        parent[1].textContent = user_age_value;
        parent[2].textContent = user_phone_num.value;
        parent[3].textContent = user_gender_value;
        parent[4].textContent = "";
        for (let j = 0; j < user_subject_value.length; j++) {
          parent[4].innerHTML += user_subject_value[j] + "<br>";
        }
        console.log(user_gender_value);
        parent[5].textContent = user_dob_value;
        parent[6].textContent = user_location_value;
        e.textContent = "Updated";
        btn_submit.style.display = "block";
        btn.style.display = "none";
        get_info(user_name_value)
          .then((details) => {
            let [user_details, index] = details;
            user_details[index].name = user_name_value;
            user_details[index].age = user_age_value;
            user_details[index].phone_number = user_phone_num_value;
            user_details[index].gender = user_gender_value;
            user_details[index].subjects = user_subject_value;
            user_details[index].DOB = user_dob_value;
            user_details[index].location = user_location_value;
            localStorage.setItem("User_details", JSON.stringify(user_details));
          })
          .catch((error) => {
            alert(error.message);
          });
        form_clear.reset();
      }

      btn_click = false;
    });
  }
}

function get_info(user_name) {
  let index = 0;
  let update_details = new Promise((resolve, reject) => {
    let update_details = JSON.parse(localStorage.getItem("User_details"));
    let user_info = update_details.find((details, indexs) => {
      if (details.name == user_name) {
        index = indexs;
        return true;
      }
    });
    if (user_info) resolve([update_details, index]);
    else reject(new Error("Data Not Found"));
  });
  return update_details;
}
