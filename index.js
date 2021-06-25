var readlineSync = require('readline-sync');

var questionsAndAnswers = [{
	question: "Which sport is Min Yoongi's screenname related to?",
	answer: "Basketball"
},
{
	question: "Who joined BTS first?(give the stage name)",
	answer: "RM"
},
{
	question: "In which month of 2013 did BTS debut?",
	answer: "June"
},
{
	question: "Which was BTS's debut song?",
	answer: "No More Dream"
},
{
	question: "Which BTS member coined the term 'Borahae'?(give the stage name)",
	answer: "V"
},
{
	question: "J-Hope collaborated with which american singer for the song 'Chicken Noodle Soup'(give the stage name)",
	answer: "Becky G"
},
{
	question: "Which BTS member refers to himself as 'Worldwide Handsome'?(give the stagename)",
	answer: "Jin"
},
{
	question: "In what year did the reality show 'Run BTS' premiere?",
	answer: "2015"
},
{
	question: "What was BTS's first official fan song?",
	answer: "2!3!"
},
{
	question: "BTS's parent company 'Big Hit Labels' was rebranded as?",
	answer: "Hybe Labels"
}
]

// array to score highscore details
var highScorers =[ 
{name:"Mudrika", score: '10'},
]

var score = 0;//to increment the user's score

var userName = readlineSync.question("Pls enter your name: ");

//function to welcome the user
function welcome(){
console.log("Hey " + userName + "! Welcome to The BTS Quiz. This is a fun quiz on BTS for the ARMYs out there. Hope you enjoy it.");
console.log();
}

//funtion to read the question and answer one by one
function quiz(){
	for(i=0; i<questionsAndAnswers.length; i++){
	play(questionsAndAnswers[i].question, questionsAndAnswers[i].answer);
	}
}

//function to ask the question, and validate the given answer
function play(que, ans){
	var userAnswer = readlineSync.question(que)
	if(userAnswer.toUpperCase() === ans.toUpperCase()){
		console.log("You got it right! You score one point..");
		score++;
	}
	else{
		console.log("Sorry, that's a wrong answer..");
	}
	console.log();
}

//function to reveal user's score and highscores
function scoreReveal(){
console.log("-----------");

console.log("Your total score is "+ score);

console.log();

console.log("Here are the highscorers: ");

console.log("Name\tScore");

console.log("---------------");

for(var i=0;i<highScorers.length;i++){
console.log(highScorers[i].name + "\t  " + highScorers[i].score);
}

console.log();
}

welcome();
quiz();
scoreReveal();

console.log("Hey " + userName + "! Thank you for taking the quiz. If you beat the highscore, ping me with your screenshot. I'll update the table. See you next time, Borahae!")