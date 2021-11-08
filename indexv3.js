/* 

Trivia Game v.3
by 
Team Cheddar: Raymond Huang, Sabre Khang, Joey Ma 

*/

// initializing the list of questions to choose from
const qBank = [
  {
    question: "JavaScript file has an extension of...?",
    mChoices: [".java", ".xml", ".js"],
    answer: ".js"
  },
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
    question: "Which architect designed the Walt Disney Concert Hall in Los Angeles?",
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
    question: "What is the name of a group of porcupines?",
    mChoices: ["a prickle", "a gang", "a troop"],
    answer: "a prickle",
    funFact: "A group of porcupines is known a prickle."
  },
  {
    question: "Which is the lowest Prime Number of the list?",
    mChoices: ["11", "12", "7"],
    answer: "7",
    funFact: "Prime number is a number that is only divisible by one and itself. Hence, 7 is the lowest Prime Number in this list."
  },
  {
    question: "Which planet is Superman from?",
    mChoices: ["Mercury", "Krypton", "Kryptonia"],
    answer: "Krypton",
    funFact: "Krypton is a fictional planet that exploded as a result of unstable geological conditions."
  },
  {
    question: "What does the 'A' stand for in NATO?",
    mChoices: ["Atlantic", "American", "Authority"],
    answer: "Atlantic",
    funFact: "NATO stands for Northern Atlantic Treaty Organization, formed in 1949."
  },
  {
    question: "What is otology?",
    mChoices: ["The study of the ear", "The study of the eyes", "The study of coins"],
    answer: "The study of the ear",
    funFact: "Otology is a branch of medicine with studies of the anatomy, physiology and diseases of the ear."
  },
  {
    question: "Who preceded Kim Jong-Un as supreme leader of North Korea?",
    mChoices: ["Kim Jong-Il", "Hwang Pyong-So", "Kin Il-Sung"],
    answer: "Kim Jong-Il",
    funFact: "Kim Jong-Un was declared supreme leader of North Korea following the funeral of his father, Kim Jong-Il on December 28, 2011."
  },
  {
    question: "What is the capital city of Nigeria?",
    mChoices: ["Niamey", "Abuja", "Rabat"],
    answer: "Abuja",
    funFact: "Abuja was declared the capital of Nigeria in 1991."
  },
  {
    question: "Who is the only U.S. president to serve mor than 2 terms?",
    mChoices: ["Abraham Lincoln", "George Washington", "Franklin D. Roosevelt"],
    answer: "Franklin D. Roosevelt", // FDR 
    funFact: "Franklin D. Roosevelt was the 32nd president of the United States who served for 4 terms from March 4, 1933 until April 12, 1945. While multiple presidents had sought third terms before, the instability of the times allowed FDR to make a strong case for stability. Congress approved the 22nd Amendment on March 21, 1947, and submitted it to the state legislatures for ratification, to limit the number of times a person is eligible for election to the office of President of the United States to two."
  },
  {
    question: "What bloodtype is known as being \"universal\" in that it can be transfused to almost any patient?",
    mChoices: ["AB-", "AB+", "O-"],
    answer: "O-", // O negative || O -
    funFact: "An O negative blood donor can generally be transfused to any patient. (However, whilst all blood types can typically receive O negative blood, it is usually kept for those with O negative blood, as O negative bloodtype can only receive O negative blood."
  },
  {
    question: "Which element are diamonds made up almost entirely of?",
    mChoices: ["Carbon", "Zinc", "Hydrogen"],
    answer: "Carbon",
    funFact: "Diamond has carbon atoms arranged in a face-centered cubic crystal structure called a diamond lattice. It has the highest hardness and thermal conductivity of any bulk material."
  },
  {
    question: "How many hearts does an octopus have?",
    mChoices: ["1", "3", "4"],
    answer: "3", // three
    funFact: "An octopus has 3 hearts; one (the single systemic) heart circulates blood around the body and two other (the  branchial hearts) pump blood through each of the two gills. Still, if one of the branchial hearts failed, the octopus would lose half of its ability to oxygenate its blood, and likely still end of causing death for the octopus."
  },
  {
    question: "What country borders Chad to the North?",
    mChoices: ["Sudan", "Niger", "Libya"],
    answer: "Libya", // 
    funFact: "Libya borders to the North of Chad. Sudan borders to the East while Niger and Nigera border to the West."
  },
  {
    question: "Which of the following psychologists is most associated with classical conditioning?",
    mChoices: ["Carl Jung", "Ivan Pavlov", "Sigmund Freud"],
    answer: "Ivan Pavlov", // three
    funFact: "Ivan Pavlov was a Russian psychologist who is known for his work in classical conditioning."
  },
  {
    question: "What is halitosis?",
    mChoices: ["enlarged gums", "bad breath", "a rare type of cancer"],
    answer: "bad breath", // 
    funFact: "Halitosis or bad breath is caused by Sulphur producing bacteria in the tong or throat. Causes may include smoking, poor oral hygiene and diet."
  },
  {
    question: "How many years are in a score?",
    mChoices: ["20", "40", "50"],
    answer: "20", // Twenty
    funFact: "Score is an old word that represents the number twenty. For example, at the Gettysburg address \"four score and seven years ago\" referred to 87 years."
  },
  {
    question: "What is the fifth element on the periodic table of elements?",
    mChoices: ["Beryllium", "Nitrogen", "Boron"],
    answer: "Boron", // 
    funFact: "The first 7 elements on the periodic table are: 1. Hydrogen, 2. Helium, 3. Lithium, 4. Beryllium, 5. Boron, 6. Carbon, 7. Nitrogen. "
  },
  {
    question: "Which city is the second largest by population in Austrailia?",
    mChoices: ["Sydney", "Melbourne", "Canberra"],
    answer: "Melbourne", // 
    funFact: "Melbourne is the second largest city by population in Australia. (Sydney: 5.0 million, Melbourne: 4.6 million, Canbera: 0.4 million (estimate as of June 2016"
  },
  {
    question: "What is the approximate mass of a human brain?",
    mChoices: ["7 pounds", "5 pounds", "3 pounds"],
    answer: "3 pounds", // lbs
    funFact: "The mass of an adult brain has a mass roughly between 1,300 and 1,400 grams (3 pounds)"
  },
  {
    question: "in what year did the Titanic sink?",
    mChoices: ["1908", "1912", "1916"],
    answer: "1912", // 
    funFact: "The RMS Titanic sunk early in the morning of April 15, 1912 after coliding with an iceberg. More than 1,500 people died as a result."
  }
]

// the total number in the question bank
// console.log(qBank.length)

// user introduction
const name = prompt("What is your name?");

const mC = ['(a)', '(b)', '(c)'];

// declaring the function definition of triviaGaming
const triviaGaming = () => {
  const randomizedMC = []; // storing randomized multiple choices
  const testQ = []; // storing the test questions
  const answerKey = []; // storing all the correct answers

  const challengeLevel = prompt("Select challenge level (1-5)");

  // will actually accept higher # for user input
  if (challengeLevel > 5 && challengeLevel < qBank.length) {
    console.log(`If you have the courage, we have the questions. Let's see how many you can get right!\n`)
  }

  // let user know he/she's asked for more questions than we have
  else if (challengeLevel > qBank.length) {
    console.log(`There are only ${qBank.length} of questions left.`);
    return;
  }

  // defaults challengeLevel to 3 if prompt response cancelled, 
  // only applicable for browser prompt box (cancel button)
  if (challengeLevel === null) {
    challengeLevel = 3;
  }

  // I think something here may be messing with the code // Idk if this is the one because in v2 with more questions, it is working as intended..... Unless we need question to always be divisible by 5?? Nvm... we had 14 on the v2 

  // user input challengeLevel determines the # questions to draw from qBank
  while (testQ.length < challengeLevel) {
    let index = Math.floor(Math.random() * qBank.length);
    testQ.push(qBank[index]);
    qBank.splice(index, 1) // take the question out of qBank
  }

  // troubleshooting
  // console.log(testQ.length)

  // each time we get a new question, push the randomized MCs into array
  // pushing all randomized multiple choices into randomizedMC
  // as randomized multiple choices are generated, 
  // push answers (both the alphabet (mC) and the text (mChoices)) into answerKey array

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

  // iterating through the entire question bank
  for (let i = 0; i < testQ.length; i++) {
    // iterating through a, b, c
    for (let j = 0; j < mC.length; j++) {
      // let index = Math.floor(Math.random() * qBank[i].mChoices.length) 
      // randomly choose a alphabet choice and set the index of mChoices 
      let index = Math.floor(Math.random() * testQ[i].mChoices.length)
      // concatenate a/b/c with a choice of possible answer ".mChoices"
      randomizedMC.push(' ' + mC[j] + ' ' + testQ[i].mChoices[index])
      // makes the answer key => match randomized mChoices to match the real answer from qBank 
      if (testQ[i].mChoices[index] === testQ[i].answer) {
        // once we generate the multiple choice
        // we push the [mC, mChoices] into the answerKey
        let a = mC[j].replace(/[^a-zA-Z ]/g, ""); // takes out all symbols
        let b = testQ[i].mChoices[index].toLowerCase(); // to lower case
        answerKey.push([a, b]);
      }
      // removes the text mChoices already used
      testQ[i].mChoices.splice(index, 1)
    }
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

  let correctNum = 0; // for score tracking

  // ask the questions one by one, considering the challengeLevel
  for (let i = 0; i < challengeLevel; i++) {
    // const userAnswer = prompt(questionBankwMC[i].question + '\n' + listMC());
    // generating & logging each question as a prompt 
    const userAnswer = prompt(testQ[i].question + '\n' + listMC()).toLowerCase().replace(/[()]/g, ""); // K - This is where I commented things out and it worked? I assume for some reason this replace something with blank space and push it toward our array answer? // J - so that it'll match upper & lower cased userAnswer and exclude input "(" or ")"

    // this should be where it check answer against the pushed array
    // check answer / answerCheck 
    if (userAnswer === answerKey[i][0] || userAnswer === answerKey[i][1]) {
      correctNum++;
      console.log("Correct!")
    } else {
      console.log("Incorrect!")
    }
    randomizedMC.splice(0, 3)
  }

  // changed to const from let
  const percentage = Math.floor((correctNum / challengeLevel) * 100)

  let endGameMessage = `${name}! You got ${correctNum} of ${challengeLevel} questions right and scored ${percentage}% on this Quiz!`;

  if (percentage < 65) {
    endGameMessage += ` You can do better!`
  } else if (percentage > 66 && percentage < 80) {
    endGameMessage += ` Good job!`
  } else {
    endGameMessage += ` You're AWESOME!\n`
  }

  console.log(endGameMessage)

  // beating the game: 
  if (qBank.length === 0) {
    // console.log(qBank.length)
    console.log('You Beat The Game!')
  }
}  // end of function TriviaGaming

// just an idea: what if we can check answer in a loose way? 
// i.e. input "worldwide web" == "world wide web"

triviaGaming()

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
    console.log(`Thank you for playing Cheddar's Trivia Game!`)
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
  playAgain()
}
