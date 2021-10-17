var textAnswer = document.getElementById("formName");
var textPlay = document.getElementById("formPlay");
var submitButton = document.getElementById("createChar");
var name;
var play;
var myName = document.querySelector('.myName');
var myPlay = document.querySelector('.myPlay');

var submitInformation = function(){
  store();
	myName.innerText = `Name: ${name}`;
	myPlay.innerText = `Playbook: ${play}`;
  textAnswer.value = ''; // Set textAnswer value to empty string
}

submitButton.onclick = submitInformation; 

function store () {
	name = textAnswer.value;
	play = textPlay.value;
	console.log(name + " " + play);
}