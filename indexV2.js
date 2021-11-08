/* 

Trivia Game v.2
by 
Team Cheddar: Raymond Huang, Sabre Khang, Joey Ma 

*/

// the list of questions to choose from
const qBank = [
    {
        question: `What does “www” stand for in a website browser?`,
        mChoices: [`world wide web`, `who, what, where, why, when`, `wait what what`],
        answer: `world wide web`
    },
    {
        question: "What is the color of the sky?",
        mChoices: ["blue", "pink", "red"],
        answer: "blue"
    },
    {
        question: "How long is an Olympic pool?",
        mChoices: ["100 meters", "50 meters", "1000 meters"],
        answer: "50 meters"
    },
    {
        question: "What is the geometric shape generally used for stop signs? ",
        mChoices: ["Triangle", "Hexagon", "Octagon"],
        answer: "Octagon"
    },
    {
        question: "What is the most common mode of transportation?",
        mChoices: ["car", "horse", "plane"],
        answer: "car"
    },
    {
        question: "What year was JavaScript created?",
        mChoices: ["1975", "2000", "1995"],
        answer: "1995"
    },
    {
        question: "Which American architect designed the Guggenheim Museum in New York?",
        mChoices: ["Frank Gehry", "Frank Lloyd Wright", "Alvar Aolto"],
        answer: "Frank Lloyd Wright"
    },
    {
        question: "Which architect designed the Walt Disney Concert Hall in New York?",
        mChoices: ["Frank Gehry", "Ieoh Ming Pei", "Peter Zumthor"],
        answer: "Frank Gehry"
    },
    {
        question: "Who created JavaScript?",
        mChoices: ["Will Sentance", "Brendan Eich", "Bill Gates"],
        answer: "Brendan Eich"
    },
    {
        question: "What is the percentage of all websites that use JavaScript?",
        mChoices: ["87%", "99%", "92%"],
        answer: "92%"
    },
    {
        question: "A function associated with an object is called?",
        mChoices: ["function", "child", "method"],
        answer: "method"
    },
    {
        question: "What should the isNaN() function return?",
        mChoices: ["is Not a Null", "is Not a Number", "is Not a New Object"],
        answer: "is Not a Number"
    },
    {
        question: "In which country is Machu Picchu located?",
        mChoices: ["Peru", "Spain", "Brazil"],
        answer: "Peru",
        funFact: "Machu Pichu is located in the Machupicchu District in Peru. A 2007 internet poll rated it as one of the New Seven Wonders of the World."
    },
    {
        question: "Which is the lowest Prime Number of the list?",
        mChoices: ["11", "12", "7"],
        answer: "7",
        funFact: "Prime number is a number that is only divisible by one and itself. Hence, 7 is the lowest Prime Number in this list."
    },
]

// user introduction
const name = prompt("What is your name?");

// const challengeLevel = prompt("Select challenge level (1-5)");
// if (challengeLevel === null) {
//   challengeLevel = 3; // defaults challengeLevel to 3 if prompt response cancelled
// }

const mC = ['(a)', '(b)', '(c)']

const triviaGaming = () => {
  // each time we get a new question, we want to push the randomized MCs into an array
  const randomizedMC = [];
  const testQ = [];
  const answerKey = [];

  const challengeLevel = prompt("Select challenge level (1-5)");
  if (challengeLevel > qBank.length) {
    console.log(`There are only ${qBank.length} of questions left.`);
    return
  }
  if (challengeLevel === null) {
    challengeLevel = 3; // defaults challengeLevel to 3 if prompt response cancelled
  }


  while (testQ.length < challengeLevel) {
    let index = Math.floor(Math.random() * qBank.length);
    testQ.push(qBank[index]);
    qBank.splice(index, 1) 
  }

  // listMC literally puts randomizedMC in a list format for each question 
  // invoked on line 91
  const listMC = () => {
    let string = '';
    // we only need 0,1,2 to produce (a),(b),(c)
    for (let i = 0; i < 3; i++) {
      string += randomizedMC[i] + '\n'
    }
    return string
  }

  // one way to set up iterating through the game
  // while (qBank.length < challengeLevel) {

  //   qBank.push(qBank[index]);
  //   qBank.splice(index,1)
  // }

  // iterating through the entire question bank
  for (let i = 0; i < testQ.length; i++) {
    // iterating through a, b, c
    for (let j = 0; j < mC.length; j++) {
    // let index = Math.floor(Math.random() * qBank[i].mChoices.length) 
    // initializing index => randomly choose a choice index of question from 
    let index = Math.floor(Math.random() * testQ[i].mChoices.length)
        // concatenate a/b/c with a choice of possible answer ".mChoices"
    randomizedMC.push(' ' + mC[j] + ' ' + testQ[i].mChoices[index])
        // makes the answer key => match randomized mChoices to match the real answer from qBank 
    if (testQ[i].mChoices[index] === testQ[i].answer) {
        // once we generate the multiple choice
        // we push the [mC, mChoices] into the answerKey
        let a = mC[j].replace(/[^a-zA-Z ]/g, "") // takes out all symbols
        let b = testQ[i].mChoices[index]
        answerKey.push([a, b]);
    }
    // removes the choice
    testQ[i].mChoices.splice(index, 1)

      // console.log(answerKey)
    }

    // use the splice method to remove the mChoice already spit
  }

  // function randomizingMC (question) {
  //   for (let j = 0; j < questionBankwMC[index].length; j++) {
  //       randomizedMC.push(questionBankwMC[i].mC + questionBankwMC[i].mChoices);
  //   }
  // }

  // for (const obj of questionBankwMC) {
  //   answerKey.push(obj.answer)
  // }

  // console.log(answerKey)

  let correctNum = 0;

  // ask the questions one by one, considering the challengeLevel
  for (let i = 0; i < challengeLevel; i++) {
    // const answer91 = prompt(questionBankwMC[i].question + '\n' + listMC());
    // generating each question as a prompt 
    const answer91 = prompt(testQ[i].question + '\n' + listMC());

    // check answer
    if (answer91 === answerKey[i][0] || answer91 === answerKey[i][1]) {
        correctNum++;
        console.log("Correct!")
    } else {
        console.log("Incorrect!")
    }
    randomizedMC.splice(0, 3)
  }

  let percentage = Math.floor((correctNum / challengeLevel) * 100)

  console.log(`${name}! You got ${correctNum} of ${challengeLevel} questions right and scored ${percentage}% on this Quiz!`)

  // beating the game: 
  if (qBank.length === 0) {
    // console.log(qBank.length)
    console.log('You Beat The Game!')
  }
} // end of main function triviaGaming


// just an idea: what if we can check answer in a loose way? 
// i.e. input "worldwide web" == "world wide web"
triviaGaming();

// how about we add a reply button?

// What if we enclosed everything we have created in a function
// Then use recursion concept
// create a base case for replay prompt variable
// When replay === N or No, the recursion break
// else the player keep playing?
// note: when we replay, the number of questions remaining in qBank becomes less and less upon each play
// let replay = prompt("Play Again?\n Y/N?")

// declaring function playAgain 
let playThis = true
const playAgain = () => {
  let replay = prompt("Play Again?\n Y/N?");
  if (replay.toLowerCase() === 'n') {
    console.log(`Thank you for playing Cheddar's Trivia Game!`);
    playThis = false
  }
  // if replay is Y, invoke triviaGaming again
  else if (replay.toLowerCase() === 'y') {
    triviaGaming();
    // if user input is not Y or N, ask them to select Y or N
  } else {
    console.log("Please select Y or N") // GOT IT
  }
}

// it'll always prompt play again as long as there's some question left in qBank
// playThis should always be true until the reply prompt was denied with N/n
while (qBank[0] && playThis) {
  playAgain();
}
