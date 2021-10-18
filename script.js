var textAnswer = document.getElementById("formName");
var textPlay = document.getElementById("formPlay");
var submitButton = document.getElementById("createChar");
var rollDisplay = document.querySelector('.diceRolls');
var name;
var play;
var myName = document.querySelector('.myName');
var myPlay = document.querySelector('.myPlay');

var dangerButton = document.querySelector('.dangerButton');
var freakButton = document.querySelector('.freakButton');
var saviorButton = document.querySelector('.saviorButton');
var superiorButton = document.querySelector('.superiorButton');
var mundaneButton = document.querySelector('.mundaneButton');
var clearRolls = document.querySelector('.clear');
var dangerMod;
var freakMod;
var saviorMod;
var superiorMod;
var mundaneMod;

var decDanger = document.querySelector('.decDanger');
var incDanger = document.querySelector('.incDanger');
var decFreak = document.querySelector('.decFreak');
var incFreak = document.querySelector('.incFreak');
var decSavior = document.querySelector('.decSavior');
var incSavior = document.querySelector('.incSavior');
var decSuperior = document.querySelector('.decSuperior');
var incSuperior = document.querySelector('.incSuperior');
var incMundane = document.querySelector('.incMundane');
var decMundane = document.querySelector('.decMundane');

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

dangerButton.addEventListener('click', function () {
	console.log("danger rolled");
	rollCheck(dangerMod, "Danger");
})

freakButton.addEventListener('click', function() {
	console.log("freak rolled");
	rollCheck(freakMod, "Freak");
})

saviorButton.addEventListener('click', function() {
	console.log("savior rolled");
	rollCheck(saviorMod, "Savior");
})

superiorButton.addEventListener('click', function() {
	console.log("superior rolled");
	rollCheck(superiorMod, "Superior");
})

mundaneButton.addEventListener('click', function() {
	console.log("mundane rolled");
	rollCheck(mundaneMod, "Mundane");
})

function rollCheck(mod, stat) {
	console.log("rolled");
	var d1 = Math.floor(Math.random() * 6) + 1;
	var d2 = Math.floor(Math.random() * 6) + 1;
	var tot = d1 + d2 + mod;
	console.log(d1 + " + " + d2);
	console.log('modifier ' + mod);
	console.log(tot);
	var print = stat + ": " + d1 + " + " + d2 + " + " + mod + ` \= ` + tot + `<br />`;
	rollDisplay.insertAdjacentHTML ('beforeend', print);
}

clearRolls.addEventListener('click', function() {
	console.log("clear rolls");
	rollDisplay.innerText = " ";
})

decDanger.addEventListener('click', function() {
	dangerMod = modStat(-1, dangerMod);
	dangerButton.innerText = dangerMod;
})

incDanger.addEventListener('click', function() {
	dangerMod = modStat(1, dangerMod);
	dangerButton.innerText = dangerMod;
})

decFreak.addEventListener('click', function() {
	freakMod = modStat(-1, freakMod);
	freakButton.innerText = freakMod;
})

incFreak.addEventListener('click', function() {
	freakMod = modStat(1, freakMod);
	freakButton.innerText = freakMod;
})

decSavior.addEventListener('click', function() {
	saviorMod = modStat(-1, saviorMod);
	saviorButton.innerText = saviorMod;
})

incSavior.addEventListener('click', function() {
	saviorMod = modStat(1, saviorMod);
	saviorButton.innerText = saviorMod;
})

decSuperior.addEventListener('click', function() {
	superiorMod = modStat(-1, superiorMod);
	superiorButton.innerText = superiorMod;
})

incSuperior.addEventListener('click', function() {
	console.log("inc superior");
	superiorMod = modStat(1, superiorMod);
	superiorButton.innerText = superiorMod;
})

decMundane.addEventListener('click', function() {
	mundaneMod = modStat(-1, mundaneMod);
	mundaneButton.innerText = mundaneMod;
})

incMundane.addEventListener('click', function() {
	mundaneMod = modStat(1, mundaneMod);
	mundaneButton.innerText = mundaneMod;
})

function modStat(adj, stat) {
	stat += adj;
	return stat;	
}