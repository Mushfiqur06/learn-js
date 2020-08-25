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

// function getSecondLargestNumber(num) {
//   var second_highest = num.sort(function (a, b) {
//     console.log(a, b);
//   })[1];
//   return second_highest;
// }

// console.log(getSecondLargestNumber([2, 3, 6, 6, 5]));

// function maps(arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i], i, arr));
//   }
//   console.log(result);
//   return result;
// }

// let newResult = maps([2, 4, 6, 8], (item) => {
//   return item * 2;
// });
// console.log(newResult);

// function hello(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }
// let alphabet = '';
// hello(['a', 'b', 'c', 'd'], function (item) {
//   alphabet += item;
// });
// console.log(alphabet);

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   print() {
//     console.log(this.name);
//   }
// }

// let hello = new User('Mushfiqur');
// console.log(hello.print());

// function User(name) {
//   this.name = name;
// }

// User.prototype.print = function () {
//   console.log(this.name);
// };
// let hello = new User('Niloy');
// hello.print();
// console.log(User.prototype.prototype);

// let arr = [1, 2, 3, 'Hello', 4];
// let newArray = arr.split(2, 4);
// console.log(newArray);
// console.log(arr);

// let number = [];
// let impureFun = (num) => number.push(num);

// let pureFun = (num) => (anotherNum) => anotherNum.concat(num);

// impureFun(5);
// console.log(number);
// console.log(pureFun(6)(number));
// console.log(pureFun(9)(number));
// console.log(number);

// let counter = 1;
// switch (counter) {
//   case 0: {
//     let name;
//     break;
//   }
//   case 1: {
//     let name;
//     break;
//   }
// }

// let hello = 'hello dkfdkf        dfjdf    jdnfjdn'
// 	.split(' ')
// 	.filter(function (item) {
// 		return item;
// 	});
// console.log(hello);

//Foreach
// var arr = [2, 4, 6, 9];
// function myForeach(arr, cb) {
//   for (var i = 0; i < arr.length; i++) {
//     cb(arr[i], i);
//   }
// }

// myForeach(arr, function (data, i) {
//   console.log(data);
//   console.log(i);
// });

// function myMap(arr, cb) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     var result = cb(arr[i]);
//     newArr.push(result);
//   }

//   return newArr;
// }

// var mapped = myMap(arr, function (data) {
//   return data * 2;
// });
// console.log("Mapped" + mapped);

// function myFilter(arr, cb) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (cb(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// var anotherResult = myFilter(arr, function (data) {
//   return data > 4;
// });

// console.log("Filterd " + anotherResult);

// function myReducer(arr, cb) {
//   var result = undefined;

//   for (var i = 0; i < arr.length; i++) {
//     if (result == undefined) {
//       result = arr[i];
//     } else {
//       result = cb(result, arr[i]);
//     }
//   }

//   return result;
// }

// var data = myReducer(arr, function (a, b) {
//   return a + b;
// });

// console.log("Reduycerr " + data);

// class Obj {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
// }

// class Obj2 {
//   constructor(c) {
//     this.c = c;
//   }
// }

// var obj = new Obj(2, 4);
// var obj2 = new Obj2(10);
