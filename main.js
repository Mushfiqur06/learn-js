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

