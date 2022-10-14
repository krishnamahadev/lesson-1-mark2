
var read = require('readline-sync');

// var read = require('readline-sync');
// console.log("How well do you know Begaluru? ")

console.log("Lets play the quiz!! How well do you know Begaluru?? ")
console.log("------------")

var username=read.question("Please enter your name buddy? ")
console.log("------------")
console.log("Okay! "+username+" Here comes the questions!")

console.log("------------")

// var question1=
// {
//  question : "What is your name? ",
//  answer : "krishna"
// }

// var question2=
//   {
//     question : "Where do you live? ",
//     answer : "jpnagar"
//   }



var highscores =
  [
    {
      name: "Syed",
      score: 10
    },
    {
      name: "Ishaan",
      score: 9
    },
    {
      name: "Divya",
      score: 8
    }
  ]
var questions =
  [
    {
      question: "where do you get the best dosa? ",
      answer: "SLV"
    },
    {
      question: "Where do you get the best pizzas? ",
      answer: "Namdhari"
    },
    {
      question: "Where do you get the best ice-cream? ",
      answer: "Via Milano"
    },
    {
      question: "Where do you get the best homemade snacks? ",
      answer: "Gandhi bazaar basavangudi"
    },
    {
      question: "Best playground? ",
      answer: "Madhavan park"
    }

  ]


var score = 0;

function play(question, answer) {
  // console.log(question);
  useranswer = read.question(question);

  if (useranswer === answer) {
    console.log("you are right! ");
    score = score + 1;
  } else {
    console.log("you are wrong");
  }
  console.log("Your score is " + score)
  console.log("------------")

}




for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}
// play(question1.question,question1.answer)

console.log("Your final is " + score + " !");
console.log("------------")

console.log("Check out the highest scores!");
for (var i = 0; i < highscores.length; i++) {
  console.log(highscores[i].name + "  " + highscores[i].score)
}

console.log("------------")
console.log("If you have beaten the highscore, please send the screenshot.")