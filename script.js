const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  store();
  

}
names=[];
  function store()
    {
    
    peru=prompt("enter player name");
    names.push(peru);
    localStorage.setItem("names",JSON.stringify(names));
    return false;

  }

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
let score=0;

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      
      
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if(correct){
    score+=1;
    
  }
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })



  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  }

  else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    alert("CONGRATULATIONS !! YOUR SCORE IS "+score)
    score=0;
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    
    element.classList.add('correct')
    

    

  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'How is COVID-19 passed on?',
    answers: [
      { text: 'Through droplets that come from your mouth and nose when you cough or breathe out', correct: true },
      { text: 'In sexual fluids, including semen, vaginal fluids or anal mucous', correct: false },
      { text: 'By drinking unclean water', correct: false},
      { text: 'All of the above', correct: false}
    ]
  },
  {
    question: 'What are the common symptoms of COVID-19? ',
    answers: [
      { text: 'A new and continuous cough', correct: false },
      { text: 'Fever', correct: false },
      { text: 'Tiredness', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    question: 'Can you always tell if someone has COVID-19? ',
    answers: [
      { text: 'No – not everyone with COVID-19 has symptoms', correct: true },
      { text: 'Yes – it will be obvious, a person with COVID-19 coughs a lot', correct: false},
      { text: 'Yes – you can tell just by where a person comes from, their race and ethnicity', correct: false },
      { text: 'Yes-probably the guy has breathing issues', correct: false }
    ]
  },
  {
    question: 'Can washing your hands protect you from COVID-19? ',
    answers: [
      { text: 'Yes – but only if you use a strong bleach', correct: false },
      { text: 'Yes – normal soap and water or hand sanitizer is enough', correct: true },
      { text: 'No – Washing your hands doesn’t stop COVID-19', correct: false },
      { text: 'No-use other measures', correct: false }
    ]
  },
   {
    question: 'Which of the following people is COVID-19 more dangerous for?  ',
    answers: [
      { text: 'People with certain underlying health conditions', correct: false },
      { text: 'Older people – especially those aged 70 and above, Children', correct: true },
      { text: 'Asians', correct: false },
      { text: 'European people', correct: false }
    ]
  },
     {
    question: 'Are people living with HIV always more at risk?  ',
    answers: [
      { text: 'Yes – people with HIV have weaker immune systems', correct: false },
      { text: 'No – people who adhere to antiretroviral treatment (ART) and have a high CD4 count aren’t more at risk', correct: true },
      { text: 'Yes-They are more prone to aquire this desease', correct: false },
    { text: 'No-They are immune', correct: false }
    ]
  },
       {
    question: 'When should fabric face masks be worn? ',
    answers: [
      { text: 'On public transport', correct: false },
      { text: 'In confined or crowded spaces', correct: false },
      { text: 'In small shops', correct: false },
    { text: 'All of the above', correct: true }
    ]
  },
         {
    question: 'Can COVID-19 be cured?  ',
    answers: [
      { text: 'Yes – Hot drinks can cure COVID-19', correct: false },
      { text: 'Yes-vaccines discovered', correct: false },
      { text: 'No – COVID-19 is a death sentence', correct: false },
    { text: 'No – but most people get better by themselves', correct: true }
    ]
  },  
  {
    question: 'Which of the following is an example of physical distancing? ',
    answers: [
      { text: 'You stop going to crowded places and visiting other people’s houses', correct: true },
      { text: 'You stop talking to the people you live with', correct: false},
      { text: 'You stop speaking to your friends on the phone', correct: false },
      { text: 'Continue being the asocial person that you are', correct: false }
    ]
  },
    {
    question: 'How can people living with HIV protect themselves from COVID-19? ',
    answers: [
      { text: 'Wash their hands regularly and follow the physical distancing advice', correct: false },
      { text: 'Keep taking their antiretroviral treatment', correct: false},
      { text: 'Exercise regularly, eat well and look after their mental health', correct: false },
      { text: 'All of the above', correct: true }
    ]
  }


]