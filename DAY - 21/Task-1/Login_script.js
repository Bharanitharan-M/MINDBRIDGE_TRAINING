let user_data = new Object();
function user_name_validate(user_name) {
  const user_name_err = user_name.nextElementSibling.nextElementSibling;
  let regx = /([0-9])/;
  if (regx.test(user_name.value)) {
    user_name_err.textContent = "Name should not contain number";
    user_name_err.style.display = "block";
  } else if (user_name.value.length < 4) {
    user_name_err.textContent = "Name should contain more than 3 letters";
    user_name_err.style.display = "block";
  } else {
    user_name_err.style.display = "none";
    return user_name.value;
  }
}
function user_mail_validate(user_mail) {
  const user_mail_err = user_mail.nextElementSibling.nextElementSibling;
  let regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
  if (!regex.test(user_mail.value)) {
    user_mail_err.textContent = "Invalid Mail Address";
    user_mail_err.style.display = "block";
  } else {
    user_mail_err.style.display = "none";
    return user_mail.value;
  }
}
let btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  let user_name = document.querySelector("input[name='name']");
  let user_mail = document.querySelector("input[name = 'mail']");
  let user_name_value = user_name_validate(user_name);
  let user_mail_value = user_mail_validate(user_mail);
  if (user_name_value && user_mail_value) {
    user_data.name = user_name_value;
    user_data.mail = user_mail_value;
    window.location.href = "quiz_index.html";
    document.getElementById("form").reset();
  }
});


