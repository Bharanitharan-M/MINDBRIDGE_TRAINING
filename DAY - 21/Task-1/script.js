let user_data = new Object();
let question_display;
let question_no = 0;
let quiz_mark = 0;
let user_answers = [];
let correct_answer = ["pop()", "join()", "filter()", "Float", "33"];
let answer = [];
let interval;
let minutes = 2;
let seconds = 0;
let user_details = [{name: "John", mail: "john@gamil.com", mark: 3},
    {name: "Ram", mail: "ram123@gamil.com", mark: 2},
    {name: "Ramesh", mail: "ramesh@gamil.com", mark: 4},
];
const questions = [
  {
    question: "Which method is used to remove the last element from an array?",
    options: [
      { answer: "pop()", isCorrect: true },
      { answer: "shift()", isCorrect: false },
      { answer: "push()", isCorrect: false },
      { answer: "unshift()", isCorrect: false },
    ],
  },
  {
    question:
      "Which method is used to join all elements of an array into a string?",
    options: [
      { answer: "join()", isCorrect: true },
      { answer: "concat()", isCorrect: false },
      { answer: "slice()", isCorrect: false },
      { answer: "splice()", isCorrect: false },
    ],
  },
  {
    question:
      "Which method creates a new array with all elements that pass a test?",
    options: [
      { answer: "filter()", isCorrect: true },
      { answer: "map()", isCorrect: false },
      { answer: "reduce()", isCorrect: false },
      { answer: "forEach()", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is not a valid JavaScript data type?",
    options: [
      { answer: "Number", isCorrect: false },
      { answer: "String", isCorrect: false },
      { answer: "Float", isCorrect: true },
      { answer: "Boolean", isCorrect: false },
    ],
  },
  {
    question: "What will the following code output: `console.log(3 + '3')`?",
    options: [
      { answer: "33", isCorrect: true },
      { answer: "6", isCorrect: false },
      { answer: "NaN", isCorrect: false },
      { answer: "Error", isCorrect: false },
    ],
  },
];


// Login Page
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
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
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
      user_data.mark = 0;
      user_details.push(user_data);
      console.log(user_details)
      quiz_page();

      document.getElementById("form").reset();
    }
  });


// Quiz page
function next() {
  let check_option = document.querySelectorAll(
    `input[name = 'option-${question_no + 1}']`
  );
  let call = answer_validate(check_option);
  if (call) {
    for (let i = 0; i < question_display.length; i++) {
      question_display[i].style.display = "none";
    }
    question_no++;
    question_display[question_no].style.display = "block";
  }
}
function answer_validate(check_option) {
  let return_ans;
  check_option.forEach((Element) => {
    if (Element.checked == true) {
      return_ans = Element;
    }
  });
  let option_err = check_option[0].parentNode.parentNode;
  if (!return_ans) {
    option_err.style.border = "3px solid red";
    return false;
  } else {
    answer[question_no] = return_ans.value;
    option_err.style.border = "none";
    return true;
  }
}
function previous() {
    let check_option = document.querySelectorAll(
      `input[name = 'option-${question_no + 1}']`
    );
    let call = answer_validate(check_option);
    if (call) {
      for (let i = 0; i < question_display.length; i++) {
        question_display[i].style.display = "none";
      }
      question_no--;
      question_display[question_no].style.display = "block";
    }
  }
  function submit() {
    let check_option = document.querySelectorAll(
      `input[name = 'option-${question_no + 1}']`
    );
    let call = answer_validate(check_option);
    clearInterval(interval);
    let display_result = document.getElementsByClassName("quiz_question");
    result_page(display_result);
    document.getElementById("quizes").style.display = "none";
    document.getElementById("result").style.display = "block";
  }
function user_answer_check(answer_final, i) {
 let points = document.getElementsByClassName('ques');
  answer_final.forEach((element) => {
    let create = document.createElement("small");
    if (element.value == answer[i] && element.value == correct_answer[i]) {
      create.textContent = "+1";
      quiz_mark++;
      points[i].after(create);
      element.nextElementSibling.style.color = "green";
    }
    else if (element.value == correct_answer[i]) {
        element.nextElementSibling.style.color = "green";
        create.textContent = "0";
        points[i].after(create);
      }
    if (element.value == answer[i] && element.value != correct_answer[i]) {
    //   create.textContent = "0";
      points[i].after(create);
      element.nextElementSibling.style.color = "red";
    }
   
  });
}


// result page
function result_page(display_result) {
    console.log(minutes)
  minutes = 1 - minutes;
  seconds = 60 - seconds;
  if (seconds == 60) seconds = 0;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  
  document.getElementById("timetaken").textContent =
    "Total time taken: " + minutes + ":" + seconds;
    
    document.getElementById('user_name').innerHTML = user_details[user_details.length-1].name+'</br>'+user_details[user_details.length-1].mail ;
  let append = document.getElementsByClassName("quiz_question")[1];
  let toatal_mark = document.getElementsByClassName("result_page")[0];
  display_result = display_result[0].children;
  let i = 0;
  Array.from(display_result).forEach((element) => {
    element.style.display = "block";
    let answer_final = document.querySelectorAll(
      `input[name = 'option-${i + 1}']`
    );
    user_answer_check(answer_final, i);
    i++;
    append.appendChild(element);
  });
  let create_mark = document.createElement("div");
  create_mark.className = "marks";
  let create_h3 = document.createElement("h3");
  create_h3.textContent = `🏆Total Mark: ${quiz_mark}/5`;
  create_mark.appendChild(create_h3);
  toatal_mark.appendChild(create_mark);
  user_details[user_details.length-1].mark = quiz_mark;
  console.log(user_details);
}

// DashBoard page
function dashboard(){
    user_details.sort((a, b) => {
        return b.mark - a.mark;
     });
     document.getElementById('dashboard').style.display = "block";
     document.getElementById("result").style.display = "none";
     let dashboard_append = document.getElementById('table_body');
     let rank = 1;
     user_details.forEach(element=>{
        let create_tr = document.createElement('tr');
        let create_td_1 = document.createElement('td')
        
        if(rank == 1){
           create_td_1.innerHTML = `<img src='./assests/Image/Rank-1.jpg'>` 
           create_td_1.style.paddingLeft = "2%";
        }
        else if(rank ==2)
        {
            create_td_1.innerHTML =  `<img src='./assests/Image/Rank-2.jpg'>` 
            create_td_1.style.paddingLeft = "2%";
      
        }
        else if(rank ==3){
            create_td_1.innerHTML = `<img src='./assests/Image/Rank-3.jpg'>`  
            create_td_1.style.paddingLeft = "2%";
        }
        else{
             create_td_1.innerHTML = `<h3>${rank}<h3>`
             create_td_1.style.paddingLeft = "4%";
        }
        let create_td_2 = document.createElement('td')
        create_td_2.innerHTML = `<h4>${element.name}<h4><h5>${element.mail}<h5>`
        let create_td_3 = document.createElement('td')
        create_td_3.innerHTML = `<h3>${element.mark}<h3>`
        create_td_3.style.paddingLeft = "5%";
        rank++;
        create_tr.appendChild(create_td_1);
        create_tr.appendChild(create_td_2);
        create_tr.appendChild(create_td_3);
        dashboard_append.appendChild(create_tr);
     })
}
function quiz_page() {
  document.getElementById("Login_page").style.display = "none";
  document.getElementById("quizes").style.display = "block";
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "#2193b0";
  document.documentElement.style.position = "static";

  let timer = document.getElementById("timer");
  let time = timer.textContent.split(":");
  interval = setInterval(() => {
    if (minutes == 0 && seconds == 0) {
      clearInterval(interval);
      submit();
    }
    if (seconds == 0) {
      seconds = 60;
      minutes--;
    }
    if (minutes < 1) timer.style.color = "#FF1493";
    seconds--;
    if (minutes < 10) timer.textContent = "0" + minutes + ":" + seconds;
    if (minutes < 10 && seconds < 10)
      timer.textContent = "0" + minutes + ":" + "0" + seconds;
    else if (seconds < 10) timer.textContent = minutes + ":" + "0" + seconds;
  }, 1000);
  let parent_div = document.getElementsByClassName("quiz_question");
  let option = 1;
  questions.forEach((Element) => {
    let create_question = document.createElement("div");
    create_question.className = "question";
    create_question.innerHTML = `<label for="question" class="ques">${Element.question}</label><br />
            <input type="radio" name="option-${option}" id="option" value = "${Element.options[0].answer}" />
            <label for="" class = 'option'>${Element.options[0].answer}</label><br />
            <input type="radio" name="option-${option}" id="option" value = "${Element.options[1].answer}"/>
            <label for="" class = 'option'>${Element.options[1].answer}</label><br />
            <input type="radio" name="option-${option}" id="option" value = "${Element.options[2].answer}" />
            <label for="" class = 'option'>${Element.options[2].answer}</label><br />
            <input type="radio" name="option-${option}" id="option" value = "${Element.options[3].answer}" />
            <label for="" class = 'option'>${Element.options[3].answer}</label><br />`;
    if (option == 1)
      create_question.innerHTML +=
        "<button class='next' onclick='next()'>Next</button><br>";
    else if (option == 5)
      create_question.innerHTML +=
        "<button class='prev' onclick='previous()'>Prev</button>" +
        "<button class='next' onclick = 'submit()'>Submit</button><br></div>";
    else
      create_question.innerHTML +=
        "<div class='button'><button class='prev' onclick='previous()' >Prev</button>" +
        "<button class='next' onclick='next()'>Next</button><br></div>";
    option++;
    parent_div[0].appendChild(create_question);
  });
  question_display = document.getElementsByClassName("question");
  question_display[0].style.display = "block";
}
