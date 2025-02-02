import Form from './Components/Form';
import Table from './Components/Tabel';
import './App.css';
import { useState } from 'react';

function App() {
  const filed_attribute = [{ type: "text", id: "fname", placeholder: "John", label_name: "Enter your Name" },
  { type: "number", id: "age", placeholder: "20", label_name: "Enter your Age" },
  { type: "email", id: "mail", placeholder: "john@gmail.com", label_name: "Enter your mail" }
  ];
  const [user_data, setUser_data] = useState([]);
  const [edit_user, setEdit_user] = useState(null);
  function validate_name(user_name) {

    let regex = /[0-9]/
    if (regex.test(user_name.value)) {
      user_name.nextElementSibling.style.display = "block";
      user_name.nextElementSibling.textContent = "Name should contain digit";
    }
    else if (user_name.value.length < 4) {
      user_name.nextElementSibling.style.display = "block";
      user_name.nextElementSibling.textContent = "Name contains more than 3 letter";
    }
    else {
      user_name.nextElementSibling.style.display = "none";
      return user_name.value;
    }
  }
  function validate_age(user_age) {
    if (user_age.value.length > 3 || user_age.value.length == 0) {
      user_age.nextElementSibling.textContent = "Invalid age! Enter valid age";
      user_age.nextElementSibling.style.display = "block";
    }
    else {
      user_age.nextElementSibling.style.display = "none";
      return user_age.value;
    }

  }
  function validate_mail(user_mail) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!regex.test(user_mail.value)) {
      user_mail.nextElementSibling.textContent = "Enter Valid Mail";
      user_mail.nextElementSibling.style.display = "Block";
    }
    else {
      user_mail.nextElementSibling.style.display = "none";
      return user_mail.value;
    }
  }
  const sumbit_form = (e) => {
    e.preventDefault();
    let user_name = validate_name(document.querySelector("input[name = 'fname']"));
    let user_age = validate_age(document.querySelector("input[name = 'age']"));
    let user_mail = validate_mail(document.querySelector("input[name = 'mail']"));
    if (user_name && user_age && user_mail) {
      setUser_data([...user_data, { id: user_data.length + 1, fname: user_name, age: user_age, mail: user_mail }]);
      document.getElementsByClassName('form_layout')[0].reset()
    }
  }
  const deletes = (id) => {
    setUser_data(user_data.filter((element) =>{
      if(element.id !== id ){
        if(element.id > id){
          element.id--;
        }
        return element;
      }

    }))
  }
  const edits = (id) =>{
    const edit = user_data.find(element => element.id == id)
    setEdit_user(edit)
    document.querySelector("input[name = 'fname']").value = edit.fname;
    document.querySelector("input[name = 'age']").value = edit.age;
    document.querySelector("input[name = 'mail']").value = edit.mail;
    document.getElementById('update').style.display = "block";
    document.getElementById('submit').style.display = "none"

  }
  const update = (event) =>{
    event.preventDefault();
    let user_name = validate_name(document.querySelector("input[name = 'fname']"));
    let user_age = validate_age(document.querySelector("input[name = 'age']"));
    let user_mail = validate_mail(document.querySelector("input[name = 'mail']"));
    if (user_name && user_age && user_mail) {
      setUser_data(user_data.map((data) =>(data.id === edit_user.id ? {...data, fname:user_name, age:user_age, mail: user_mail} : data))); 
      document.getElementsByClassName('form_layout')[0].reset();
          document.getElementById('update').style.display = "none";
    document.getElementById('submit').style.display = "block"
    }
  }
  return (
    <div id='content'>
      <Form filed_attribute={filed_attribute} click={sumbit_form} btn_name={"Submit"} update_btn={update} btn_upname={"Update"}/>
      <Table table_data={user_data} del_btn={deletes} edit_btn={edits}/>
    </div>
  )
}

export default App;
