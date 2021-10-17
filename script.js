var textAnswer = document.getElementById("formName");
var textPlay = document.getElementById("formPlay");
var submitButton = document.getElementById("createChar");
var name;
var play;
var myName = document.querySelector('.myName');
var myPlay = document.querySelector('.myPlay');

var dangerButton = document.querySelector('.dangerButton');
var freakButton = document.querySelector('.freakButton');
var saviorButton = document.querySelector('.saviorButton');
var superiorButton = document.querySelector('.superiorButton');
var mundaneButton = document.querySelector('.mundaneButton');
var dangerMod;
var freakMod;
var saviorMod;
var superiorMod;
var mundaneMod;

var submitInformation = function(){
  store();
	myName.innerText = `Name: ${name}`;
	myPlay.innerText = `Playbook: ${play}`;
	playbooks(play);
	setStats();
}

submitButton.onclick = submitInformation; 

// store character name and chosen playbook to variables
function store () {
	name = textAnswer.value;
	play = textPlay.value;
	console.log(name + " " + play);
}

// assign starting stat modifiers based on playbook selection
function playbooks (book) {
	if (book == "The Beacon") {
		dangerMod = -1;
		freakMod = -1;
		saviorMod = 2;
		superiorMod = 0;
		mundaneMod = 2;
	} else if (book === "The Bull") {
		dangerMod = 2;
		freakMod = 1;
		saviorMod= -1;
		superiorMod = 1;
		mundaneMod = -1;
	} else if (book === "The Delinquent") {
		dangerMod = 0;
		freakMod = 0;
		saviorMod = -1;
		superiorMod = 2;
		mundaneMod = 1;
	} else if (book === "The Doomed") {
		dangerMod = 1;
		freakMod = 1;
		saviorMod = 1;
		superiorMod = -1;
		mundaneMod = 0;
	} else if (book === "The Janus") {
		dangerMod = 0;
		freakMod = -1;
		saviorMod = 0;
		superiorMod = 0;
		mundaneMod = 3;
	} else if (book === "The Legacy") {
		dangerMod = -1;
		freakMod = 0;
		saviorMod = 2;
		superiorMod = 0;
		mundaneMod = 1;
	} else if (book === "The Nova") {
		dangerMod = 1;
		freakMod = 2;
		saviorMod = 0;
		superiorMod = 0;
		mundaneMod = -1;
	} else if (book === "The Outsider") {
		dangerMod = -1;
		freakMod = 1;
		saviorMod = 0;
		superiorMod = 2;
		mundaneMod = 0;
	} else if (book === "The Protege") {
		dangerMod = -1;
		freakMod = 0;
		saviorMod = 1;
		superiorMod = 2;
		mundaneMod = 0;
	} else if (book === "The Transformed") {
		dangerMod = 1;
		freakMod = 3;
		saviorMod = 0;
		superiorMod = -1;
		mundaneMod = -1;
	} 
}

// set starting stat modifiers on character sheet
function setStats() {
	dangerButton.innerText = dangerMod;
	freakButton.innerText = freakMod;
	saviorButton.innerText = saviorMod;
	superiorButton.innerText = superiorMod;
	mundaneButton.innerText = mundaneMod;
}