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

//Array
/*
var fruits = ['Apple', 'banana'];
fruits.push('Orange');
fruits.forEach(function(item){
	console.log(item);
})
*/

/*
function isLetter(character){
	return character >= 'a' && character <= 'z';
}
if(Array.prototype.every.call(str, isLetter)){
	console.log("This string " +  str + " contains only letter");
}
*/

//Learn Object
var obj = {
	name: 'Mushfiqur Rahman Niloy',
	email: 'mushfiqur06@gmail.com',
	skills: ['JavaScript', 'Python', 'C'],
	address: {
		city: 'Dhaka',
		area: 'Mirpur',
		country: 'BD'
	}
};

obj.skills.forEach(element => {
	console.log(obj.name + ' knows ' + element);
});

var person = {
	name: ['Bob', 'Smith'],
	age: 32,
	gender: 'male',
	interests: ['music', 'skiing'],
	bio: function(){
		console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.')
	},
	greeting: function(){
		console.log('Hi! I\'m ' + this.name[0] + '.')
	}
}
console.log(person.greeting())
