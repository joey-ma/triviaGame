/* 

Trivia Game 
by 
Team Cheddar: Raymond Huang, Sabre Khang, Joey Ma 

*/

const name = prompt("What is your name?");
const challengeLevel = prompt("Select challenge level (1-5)");

// questionBank
// questions are in form of multiple choices
const questionBank = [ 
  {question: "What does “www” stand for in a website browser?\n (a) World Wide Web\n (b) What Why Where\n (c) Wait What What  ",
  answer: "a"},
  {question: "How long is an Olympic swimming pool (in meters)?\n (a) 100 meters\n (b) 50 meters\n (c) 1000 meters  ",
  answer: "b"},
  {question: "What geometric shape is generally used for stop signs?\n (a) Hexagon\n (b) Circle\n (c) Octagon  ",
  answer: "c"},
  {question: "What is the color of the sky?\n (a) blue\n (b) red\n (c) pink  ",
  answer: "a"},
  {question: "What is a common transportation mode?\n (a) horses\n (b) car\n (c) moose   ",
  answer: "b"},
  {question: "What year was Javascript created?\n (a) 1995\n (b)2000\n (c) 2008  ",
  answer: "a"},
  {question: "Which American architect designed the Guggenheim Museum in New York?\n (a) Frank Gehry\n (b) Frank Lloyd Wright\n (c) Alvar Aolto  ",
  answer: "b"},
  {question: "Which architect designed the Walt Disney Concert Hall in New York?\n (a) Frank Gehry\n (b) Ieoh Ming Pei\n (c) Alvar Aolto  ",
  answer: "a"},
];


const testQuestions = [];
const answerKey =[];
const userAnswer = [];
let correctNum = 0;

// gameStarts: get a random question from and remove it out of questionBank
// push the random question into testQuestions
while (testQuestions.length < challengeLevel) {
  let index = Math.floor(Math.random() * questionBank.length)
  testQuestions.push(questionBank[index])
  questionBank.splice(index,1)
}

// pushing answer to answer key
for (const obj of testQuestions) {
  answerKey.push(obj.answer)
}

// ask the questions one by one
for (let i = 0; i < challengeLevel; i++) {
  const answer = prompt(testQuestions[i].question)
  userAnswer.push(answer.toLowerCase())
  // check if answerKey matches userAnswer (at some point)
  if (userAnswer[i] === answerKey[i]) {
    correctNum++
    console.log("Correct!")
  } else {
    console.log("Incorrect!")
  }
}




let percentage = Math.floor((correctNum / challengeLevel) * 100)
// console.log(answerArr)
console.log(`${name}! You got ${correctNum} of ${challengeLevel} questions right and scored ${percentage}% on this Quiz!`)

// we're off to a good start!

// idea1

// randomize the multiple choices & order of matches

const questionBankwMC = [ 
  {question: "What does “www” stand for in a website browser?,
  (a) World Wide Web\n (b) What Why Where\n (c) Wait What What  "]

const randomizeMC = [];


// idea2 

// allow user to type in answer, but allow a way to check for accuracy with a range of acceptable answers (i.e. Coke, coke, coca COLA would all be correct)

  // set answer to an array of acceptable answers, iterate through the array to check userAnswer[i] === all elements within answerKey[i]