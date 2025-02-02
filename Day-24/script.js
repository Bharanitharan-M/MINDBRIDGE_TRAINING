function email_validate(email){
    let email_err = email.nextElementSibling;
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
    if(!regex.test(email.value)){
        email.style.border = "1px solid red";
        email_err.style.display = "block";
        email_err.textContent = "Invalid Mail"
    }
    else{
        email.style.border = "1px solid #ced4da";
        email_err.style.display = "none";
        return email.value
    }
}
function password_validate(password){
    let password_err = password.nextElementSibling;
    let regex = /[A-Z]{1,}[a-z]{1,}[0-9]{1,}/
    if(!regex.test(password.value)){
        password.style.border = "1px solid red";
        password_err.style.display = "block";
        password_err.textContent = "Password should contain uppercase, lowercase and number";
    }
    else{
        password.style.border = "1px solid #ced4da";
        password_err.style.display = "none";
        return password.value;
    }


}
document.querySelector("input[name = 'email']").addEventListener('keypress',()=>{
    let email = email_validate(document.querySelector("input[name = 'email']"));
})
document.getElementById('sign_button').addEventListener('click',(event)=>{
    
    event.preventDefault();
    let email = email_validate(document.querySelector("input[name = 'email']"));
    let password = password_validate(document.querySelector("input[name = 'password']"));
    if(email && password){
        window.location.href = 'product.html';
    }
})
