//Adding an image changer
/*
var myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'img_2019.jpg'){
		myImage.setAttribute('src', 'img_2010.jpg');
	}else{
		myImage.setAttribute('src', 'img_2019.jpg');
	}
}
*/

//Adding a personalize welcome message
/*
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter you name: ');
	console.log(myName)
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozila Is Cool ' + myName;
}
if(!localStorage.getItem('name')){
	setUserName()
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozila is cool ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}
*/


//If Statement
/*
function testNum(a){
	if(a > 0){
		return('Positive');
	}else{
		return('Not Positive');
	}
}
console.log(testNum(5));

//Condition (ternary) Operator
function getFee(isMonth){
	return (isMonth ? '$2.00' : '$10.00');
}

var age = 26;
var beverage = (age >= 21) ? 'Beer' : 'Juice';
console.log(beverage);

function greeting(person){
	var name = person ? person.name : 'stranger';
	return 'hello ' + name;
}

console.log(greeting(undefined));
*/

//loop example
/*
function howMany(selectObject){
	var numberSelected = 0;
	for(var i = 0; i < selectObject.options.length; i++){
		if(selectObject.options[i].selected){
			numberSelected++;
		}
	}
	return numberSelected;
}

var bt = document.getElementById('btn');
btn.addEventListener('click', function(){
	alert('Number of option selected: ' + howMany(document.selectForm.musicType))
})
*/

/*
var i = 0;
do{
	i += 1;
	console.log(i);
}while(i < 5);
*/

/*
var n = 0;
var x = 0;
while(n < 3){
	n++;
	x += n;
	console.log(n);
}
*/

/*
var x = 0;
var z = 0;
labelCancelLoops: while(true){
	console.log('Outer Loops: ' + x);
	x += 1;
	z = 1;
	while(true){
		console.log('inner loops: ' + x);
		z += 1;
		if(z === 10 && x === 10){
			break labelCancelLoops;
		}else if(z === 10){
			break;
		}
	}
}
*/

/*
var x;
var myCars = new Object();
myCars[10] = "Saab";
myCars[20] = "Volvo";
myCars[30] = "BMW";

for (x in myCars) {
	console.log(myCars[x]);
}
*/