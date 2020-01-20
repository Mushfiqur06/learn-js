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
/*
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
*/
/*
function muFun(theObject){
	theObject.make = 'Toyota'
}

var myCar = {
	make: 'Honda',
	model: 'Accord',
	year: '1994'
}
var x = myCar.make;
muFun(myCar);
y = myCar.make;
console.log(y);



var square = function (n){
	return n * n;
}
console.log(square(5));


var num1 = 30;
var num2 = 20;
var name = 'Chakma';

function multiply(){
	return num1 * num2;
}
*/

//First Class Function
/*
function sayHello(){
	return 'Hello, ';
}

function greeting(helloMessage, name){
	console.log(helloMessage() + name);
}
greeting(sayHello, 'Niloy');
*/

//Learn IndexOf()
/*
var beats = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beats.indexOf('duck'));

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);

while(idx != -1){
	indices.push(idx);
	idx = array.indexOf(element, idx + 1);
}

function updateVegetablesCollection(veggies, veggie){
	if(veggies.indexOf(veggie) === -1){
		veggies.push(veggie);
		console.log('New veggie collection is: ' + veggies);
	}else if(veggies.indexOf(veggie) > -1 ){
		console.log(veggie + ' already exists in the veggies collection');
	}
}
var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

var collection = updateVegetablesCollection(veggies, 'spinach');
console.log(collection)
*/

//Learn Inheritance
/*
function Person(first, last, age, gender, interests){
	this.name = {
		first,
		last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
}

Person.prototype.greetings = function(){
	console.log('Hi! I\'m ' + this.name.first + '.');
}
*/

/*
function Book(name, author, price){
	this.name = name;
	this.author = author;
	this.price = price;

	this.wishList = function(){
		console.log('This is wish List method and author name is ' + this.author);
	}
}

Book.prototype.buy = function(){
	console.log('This is buy method and book name is ' + this.name);
};

let book1 = new Book('Book1', 'Author1', 84);
let book2 = new Book('Book2', 'Author2', 87);

console.log(book1.buy());
console.log(book2.wishList());
*/

// let obj = {
// 	a: 10,
// 	b: 20,

// 	print: function(){
// 		console.log(this.a);

// 		function myFunc(){
// 			console.log(this.b);
// 		}
// 	}
// }
// obj.print();

// let obj1 = {
// 	name: 'Mushfiqur',

// 	print: function(){
// 		console.log(this.name)
// 	}
// }

// let obj2 = {
// 	name: 'Niloy',
// 	print: obj1.print
// }

// obj2.print();

//Impurly Changing an Object
// const impureAssoc = (key, value, object) => {
// 	object[key] = value;
// }
// const person = {
// 	name: 'Bobo'
// }
// const result = impureAssoc('Niloy', 400, person);

// console.log({person, result})

//Purifying it up
// const pureAssoc = (key, value, object) => ({
// 	...object,
// 	[key]: value
// });

// const person = {
// 	name: 'Babo'
// }

// const result = pureAssoc('Niloy2', 400, pureAssoc);

// console.log({person, result})

//Another pure way
// const pureAssoc = (key, value, object) => {
// 	const newObeject = {...object};

// 	newObeject[key] = value;

// 	return newObeject;
// }

// const person = {
// 	name: 'Babo2'
// };
// const result = pureAssoc('Niloy3', 5000, person);

// console.log({person, result})

// Unsafe Nested Mutation
// const person = {
// 	name: 'Niloy4',
// 	address: {
// 		street: 'Main Street',
// 		number: 123
// 	}
// }

// const shallowPersonClone = {...person};
// shallowPersonClone.address.number = 456;
// console.log( {person, shallowPersonClone})

//Safe Nested Mutation
// const person = {
// 	name: 'Bobo5',
// 	address: {
// 		street: 'Main Street',
// 		number: 123
// 	}
// }

// const deepPersonClone = JSON.parse(JSON.stringify(person));
// deepPersonClone.address.number = 456;
// console.log({person, deepPersonClone})

//Return from another function
// function greeting(msg){
// 	return function(name){
// 		console.log(msg + ' ' + name);
// 	}
// }
// const goodMorning = greeting('Good Morning');
// goodMorning('Niloy');
// goodMorning('Meher');
// const goodNight = greeting('Good Night');
// goodNight('Mushfiq')

//Make a power function
// function power(base){
// 	return function(num){
// 		let result = 1;
// 		for(let i = 0; i < base; i++){
// 			result *= num;
// 		}
// 		return result;
// 	}
// }

// const good = power(4)(6);
// console.log(good)

// const good = power(4)(6);
// console.log(good)

// Learn Higher Order Function

// function callMe(name, cb){
// 	console.log(`Hello ${name}`);
// 	console.log(`You name has ${name.length} character`);
// 	cb(name)
// }

// function doSomeThing(name){
// 	let newName = name.split('').join(' - ');
// 	console.log('Nice presentation of your name' );
// 	console.log(newName);
// }

// callMe('Mushfiqur Rahman Niloy', doSomeThing)
// callMe('Mushfiqur Niloy', doSomeThing);

// callMe('Mushfiqur Niloy', doSomeThing);
// callMe('Mushfiqur Niloy', doSomeThing);
// callMe('Mushfiqur Niloy', doSomeThing);


// function createNewPerson(name){
// 	const obj = {};
// 	obj.name = name;
// 	obj.greeting = function(){
// 		console.log('Hi! I\'m ' + obj.name + '.')
// 	}

// 	return obj;
// }

// const salva = createNewPerson('Mushfiqur Rahman Niloy');
// salva.name;
// salva.greeting();

// const niloy = createNewPerson('Mushfiqur Niloy');
// niloy.name;
// niloy.greeting();

// function check(arr, num){
// 	if(arr.indexOf(num) === -1){
// 		return false
// 	}else{
// 		return true
// 	}
// }

// const newArray = ['Niloy', 'Tuni', 'Meher'];
// console.log(check(newArray, 'Meher'))

// function Person(first, last, age, gender, interests){
// 	this.name = {
// 		first: first,
// 		last: last
// 	}
// 	this.age = age
// 	this.gender = gender
// 	this.interests = interests

// 	this.bio = function(){
// 		console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.')
// 	}
// 	this.greeting = function(){
// 		console.log('Hello i\'m ' + this.name.first)
// 	}
// }

// const niloy = new Person('Mushfiqur', 'Niloy', 23, 'Male', 'Games')
// console.log(niloy.greeting())

// function filteredArray(arr, elm){
// 	const newArray = []
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i].indexOf(elm) === -1){
// 			newArray.push(arr[i])
// 		}
// 	}

// 	return newArray;
// }

// console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18))

// function hoist(){
// 	console.log(message)
// 	var message = 'Hello'
// 	console.log(message)
// }

// hoist()

// function Person(name, age){
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.print = function(){
// 	const details = `Hello, My name is ${this.name} and i'm a ${this.age} year's old.`
// 	return details;
// }

// const result = new Person('Mushfiqur Niloy', 23);
// console.log(result.print())

// function largestOfFour(arr) {
// 	let longestArray = [];

// 	for(let i = 0; i < arr.length; i++){
// 		const newArray = arr[i].sort((a, b) => b - a)
// 		longestArray.push(newArray.shift())
// 	}

// 	return longestArray;

//   }

//   largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// const arrays = [4, 5, 1, 3].sort((a, b) => b - a);

// console.log(arrays.shift())

// function booWho(bool) {
// 	// What is the new fad diet for ghost developers? The Boolean.
// 	return typeof bool === "boolean" ? true : false;
//   }

//   booWho(null);

// function frankenSplice(arr1, arr2, n) {
// 	let newArray = arr2.slice()
// 	console.log(newArray)
// 	newArray.splice(n, 0, ...arr1)
// 	return newArray
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

function bouncer(arr) {
	return arr.filter(Boolean)
  }
  
  console.log(bouncer([7, "ate", "", false, 9]))