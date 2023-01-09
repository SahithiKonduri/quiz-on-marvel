import readlineSync from 'readline-sync';
import chalk from 'chalk';
var score = 0;
var userName = readlineSync.question("May I know ur name?");
console.log(chalk.yellowBright("Welcome ") + chalk.green(userName) + chalk.yellowBright(" let's see if you know Marvel Cinematic universe"));

var highScores = [
  {
    name: "Saiteja",
    score: 2
  },
  {
    name: "Sharanya",
    score: 3
  }
]
var questions = [
  {
    question: "Who can lift Thor's Hammer?",
    answer: "Captain America"
  },
  {
    question: "What is Captain America's shield made out of?",
    answer: "Vibranium"
  },
  {
    question: "Which of these is NOT an infinity stone?",
    answer: "Love"
  }
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log(chalk.greenBright("Right answer!"));
    score = score + 1;
  }
  else {
    console.log(chalk.redBright("Wrong!"));
  }
  console.log("Current score :", score);
  console.log("--------");
}

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

  console.log(chalk.black("YAY! You SCORED: ", score));
  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score));

play();



