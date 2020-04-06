//Build-in browser function
// let myText = 'I am a String';
// let newString = myText.replace('String', 'I am another String');
// //console.log(newString);

// let myArray = ['I', 'love', 'JavaScript'];
// let madeString = myArray.join(' ');
// console.log(madeString);

//learn array sorting
// let arr = [12, 45, 67, 90, 1, 46, 678];

//Create a sorting function
// function sort(arr, cb){
//     for(var i = 0; i < arr.length; i++){
//         for(var j = 0; j < i; j++){
//             var result = cb(arr[i], arr[j]);

//             if(result < 0){
//                 var temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// }

// sort(arr, (a, b) => {
//     if(a > b){
//         return 1;
//     }else if(a < b){
//         return -1;
//     }else{
//         return 0;
//     }
// });

// console.log(arr)

// let homes = [
//     {
//         "h_id": "3",
//         "city": "Dallas",
//         "state": "TX",
//         "zip": "95201",
//         "price": "162500"
//     }, {
//         "h_id": "4",
//         "city": "Bevery Hills",
//         "state": "CA",
//         "zip": "75201",
//         "price": "200"
//     }, {
//         "h_id": "5",
//         "city": "New York",
//         "state": "NY",
//         "zip": "00010",
//         "price": "962500"
//     }
// ];

// homes.sort((a, b) => {
//     return parseFloat(a.price) - parseFloat(b.price);
// })
// console.log(homes)

// let a = 10;
// let b = a;
// a = 0;
// console.log(b);

// function duplicateSpreadsheet(orginal) {
// 	if (orginal.hasPaddingChanges) {
// 		throw new Error(
// 			'You need to save the file before you can duplicate the file'
// 		);
// 	}

// 	let copy = {
// 		created: Date.now(),
// 		author: orginal.author,
// 		cells: orginal.cells,
// 		metadata: orginal.metadata
// 	};
// 	copy.metadata.title = 'Copy of' + orginal.metadata.title;

// 	return copy;
// }

// var arr = ['Hello', 12, undefined, 'Mushfiqur', 13];

// var newArr = arr.map(value => {
// 	if (typeof value === 'string') {
// 		return '';
// 	} else if (typeof value === 'number') {
// 		return value % 2 !== 0 ? value + 1 : value;
// 	} else {
// 		return value;
// 	}
// });

// console.log(newArr);

// const myObj = {
// 	name: 'Mushfiqur Niloy',
// 	anotherObj: {
// 		name: 'Niloy',
// 		msg: function() {
// 			console.log('My name is ' + this.name);
// 		}
// 	}
// };

// myObj.anotherObj.msg.call(myObj);

// var a = 10;
// var b = 20;

// function hello(a, b) {
// 	console.log('Before' + a + ' ' + b);
// 	var temp = a;
// 	a = b;
// 	b = temp;
// 	console.log('After ' + a + ' Hello ' + b);
// }

// hello(a, b);
// console.log('A = ' + a + ' And B = ' + b);

// let obj = {
// 	a: 10,
// 	b: 20
// };

// function hello(obj) {
// 	console.log('Before A = ' + obj.a + ' Before B = ' + obj.b);
// 	var temp = obj.a;
// 	obj.a = obj.b;
// 	obj.b = temp;
// 	console.log('After A = ' + obj.a + ' After B = ' + obj.b);
// }

// hello(obj);

// console.log('A = ' + obj.a);
// console.log('B ' + obj.b);

// function Person(name, age, designation) {
// 	this.name = name;
// 	this.age = age;
// 	this.designation = designation;
// }

// const personOne = new Person('Mushfiqur', 24, 'Software Engineer');

// console.log(personOne);
// const personTwo = new Person(
// 	'Mushfiqur Niloy',
// 	26,
// 	'Senior Front-End Engineer'
// );

// console.log(personTwo);

// Person.prototype.birthDate = function() {
// 	console.log(
// 		'Hello, My name is ' +
// 			this.name +
// 			' and i am ' +
// 			this.age +
// 			'years old. I am a ' +
// 			this.designation
// 	);
// };

// personOne.birthDate();

// function Teacher(name, age, designation, subject) {
// 	Person.call(this, name, age, designation);
// 	this.subject = subject;
// }

// const teacherOne = new Teacher('MR Niloy', 33, 'Teacher', 'Javascript');

// console.log(teacherOne);
// console.log(teacherOne.subject);

// let arr = [23, 45, 26, 78, 90];

// let sum = arr.reduce((previousValue, currentValue) => {
// 	return previousValue + currentValue;
// }, 10);

// console.log(sum);

// let person = {
// 	name: 'Mushfiqur Rahman Niloy',
// 	email: 'mushfiqur06@gmail.com',
// 	status: 'Single',
// 	skills: ['Javascript', 'Python', 'C']
// };
// person.skills.map(skill => console.log('Mushfiqur knows ' + skill));

// function nameOfFunction(str) {
// 	typeof str === 'string'
// 		? console.log(str.split(' ').length)
// 		: console.log('Hello brother please input string');
// }

// nameOfFunction(23);

// let a = {
// 	some: 55
// };

// function fun(value) {
// 	let newValue = Object.assign({}, value);
// 	newValue.some = 100;
// 	console.log(newValue);
// }

// fun(a);
// console.log(a.some);

function power(num) {
	return function base(base) {
		let newValue = 1;
		for (let i = 0; i < num; i++) {
			newValue *= base;
		}

		return newValue;
	};
}

console.log(power(3)(5));
