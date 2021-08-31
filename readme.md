Team Cheddar
Sabre, Raymond, Joey

Project: Creating a Trivia Game

What is a trivia game?

Main Components: 
  1. Questions
  2. User inputs
    A. Prompt, multiple choices? 
  3. A way to track score 
    A. Percentage
    B. Correct / total question

Logic:
  1. Questions
    A. Store as array of object (bank of questions)
    B. Generating questions
      1. Using Math.random() to get random indexing of the questions in our question bank
      2. start with up to 3 (while loop)
  2. User inputs
    A. 
  3. Tracking Score

https://replit.com/@yoyoyojoe/triviaGamev3#index.js

**Bug(s) resolved**

2021-08-30: 
After choosing “y” to play again 4 times, the 5th time answerKey got 4 answers, but testQ got 5 questions, and the answerChecking mechanism failed 


   TypeError: Cannot read property ‘0’ of undefined
   At trivaGaming

After choosing “y” to play again 3 times, the 4th time answerKey got 4 answers, but testQ got 5 questions, and the answerChecking mechanism failed 



**Change Log**

2020-08-30 11:32 PM EST: 
Alter questions prompts multiple choices.  Added logging correct or incorrect. 

