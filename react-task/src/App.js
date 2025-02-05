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
  const [user_input, setUser_input] = useState([]);
  const [input_err, Setinput_err] = useState([{ fname: "", age: "", mail: "" }]);
  function validate_name(user_name) {
    let regex = /[0-9]/
    if (!user_name) {
      return "Filed is required"
    }
    if (regex.test(user_name)) {
      return "Name Should Not contain Number"
    }
    else if (user_name.length < 4) {
      return "Name contains more than 3 letter";
    }

  }
  function validate_age(user_age) {
    if (!user_age) {
      return "Field is required"
    }
    if (user_age.length > 3 || user_age.length == 0) {
      return "Invalid age! Enter valid age";
    }


  }
  function validate_mail(user_mail) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!regex.test(user_mail)) {
      return "Enter Valid Mail";
    }

  }
  const sumbit_form = (e) => {
    e.preventDefault();
    let user_name = validate_name(user_input.fname);
    let user_age = validate_age(user_input.age);
    let user_mail = validate_mail(user_input.mail);
    if (user_name || user_age || user_mail) {
      Setinput_err({ fname: user_name, age: user_age, mail: user_mail });
      return;
    }
    setUser_data([...user_data, { id: user_data.length + 1, ...user_input }]);
    setUser_input({ fname: "", age: "", mail: "" });
    Setinput_err({ fname: null, age: null, mail: null })
  }
  const deletes = (id) => {
    setUser_data(user_data.filter((element) => {
      if (element.id !== id) {
        if (element.id > id) {
          element.id--;
        }
        return element;
      }

    }))
  }
  const edits = (id) => {
    const edit = user_data.find(element => element.id == id)
    setEdit_user(edit)
    setUser_input({ fname: edit.fname, age: edit.age, mail: edit.mail })
    document.getElementById('update').style.display = "block";
    document.getElementById('submit').style.display = "none"

  }
  const update = (event) => {
    event.preventDefault();
    let user_name = validate_name(user_input.fname);
    let user_age = validate_age(user_input.age);
    let user_mail = validate_mail(user_input.mail);
    if (user_name || user_age || user_mail) {
      Setinput_err({ fname: user_name, age: user_age, mail: user_mail });
      return;
    }
    setUser_data(user_data.map((data) => (data.id === edit_user.id ? { ...data, ...user_input } : data)));
    setUser_input({ fname: "", age: "", mail: "" })
    document.getElementById('update').style.display = "none";
    document.getElementById('submit').style.display = "block"
  }
  const change_input = (e) => {
    console.log(user_input)
    setUser_input((prev) => (
      { ...prev, [e.target.name]: e?.target.value }
    ))
  }

  return (
    <div id='content'>
      <Form filed_attribute={filed_attribute} click={sumbit_form} btn_name={"Submit"} update_btn={update} btn_upname={"Update"} change={change_input} value={user_input} err={input_err} />
      <Table table_data={user_data} del_btn={deletes} edit_btn={edits} />
    </div>
  )
}

export default App;
