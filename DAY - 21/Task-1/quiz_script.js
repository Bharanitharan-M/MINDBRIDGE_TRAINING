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
let start;
window.addEventListener("DOMContentLoaded", async () => {
  start = await confirm("Start Quiz");
  if (start) {
    document.getElementById('quiz').style.display = "Block"
    let timer = document.getElementById("timer")
    let time = timer.textContent.split(":");
    let minutes = 10;
    let seconds = 0;
    let interval = setInterval(() => {
      if(minutes == 0 && seconds == 1)
        clearInterval(interval)
      if(seconds == 0)
      {
        seconds = 60
        minutes--;
      }
      seconds--;
      if(minutes < 10)
        timer.textContent = "0"+minutes+":"+seconds;
      if(minutes < 10 && seconds < 10)
        timer.textContent = "0"+minutes+":"+"0"+seconds;
      else if(seconds < 10)
        timer.textContent = minutes+":"+"0"+seconds;  
    }, 1000);
    let parent_div = document.getElementsByClassName('quiz_question')
   
        let create_question = document.createElement('div');
        create_question.className = "question";
        create_question.innerHTML = `<label for="question">What is JS</label><br />
            <input type="radio" name="option-1" id="option" />
            <label for="">Js</label><br />
            <input type="radio" name="option-1" id="option" />
            <label for="">Js</label><br />
            <input type="radio" name="option-1" id="option" />
            <label for="">Js</label><br />
            <input type="radio" name="option-1" id="option" />
            <label for="">Js</label><br />
            <button>Next</button><br>`
            parent_div[0].appendChild(create_question);
    
  }
  else{
    alert("login again")
    window.location.href = 'Login_index.html';
  }
});
