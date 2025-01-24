let answer = [];
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
function user_answer_check(answer_final, i) {
  answer_final.forEach((element) => {
    if (element.value == answer[i] && element.value == correct_answer[i]) {
      let create = document.createElement("small");
      create.textContent = "+1";
      quiz_mark++;
      element.previousElementSibling.previousElementSibling.after(create);
      element.nextElementSibling.style.color = "green";
    }
    if (element.value == answer[i] && element.value != correct_answer[i]) {
      let create = document.createElement("small");
      create.textContent = "0";
      element.previousElementSibling.previousElementSibling.after(create);
      element.nextElementSibling.style.color = "red";
    }
    if (element.value == correct_answer[i]) {
      element.nextElementSibling.style.color = "green";
    }
  });
}

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
let question_display;
let question_no = 0;
let quiz_mark = 0;
let user_answers = [];
let correct_answer = ["pop()", "join()", "filter()", "Float", "33"];
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
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
}
let timer = document.getElementById("timer");
let time = timer.textContent.split(":");
let minutes = 2;
let seconds = 0;
let interval = setInterval(() => {
  if (minutes == 0 && seconds == 0) {
    clearInterval(interval);
    submit();
  }
  if (seconds == 0) {
    seconds = 60;
    minutes--;
  }
  if (minutes < 1) timer.style.color = "#FF0000";
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

// result_page
function result_page(display_result) {
  minutes = 2 - minutes;
  seconds = 60 - seconds;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  document.getElementById("timetaken").textContent =
    "Total time taken: " + minutes + ":" + seconds;

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
}
