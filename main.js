// var foo = {
//     a: 42
// }
// var bar = Object.create(foo)
// bar.b = 'Hello'
// console.log(bar.a)
// console.log(bar.b)

// const num = 3;

// function multipleBy2(inputNum) {
//   const result = inputNum * 2;
//   return result;
// }

// const output = multipleBy2(num);
// const newOutput = multipleBy2(10);

// console.log(output);
// console.log(newOutput);

// const a = 3;
// const b = new Number(3);
// console.log(typeof b);

// String.prototype.giveLadyaPizza = () => console.log('Hello');

// const name = 'Niloy';
// name.giveLadyaPizza();

// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());

// var hello = 32;

// function say() {
//   hello = 50;
//   console.log('Inner ' + hello);
// }
// console.log(hello);
// say();

// let hello = [1, 2, 3, 4];
// let arr1 = hello.slice(0, 2);
// console.log(arr1);
// console.log(hello);
let A = 20;
let B = 10;
let x, y;

x = A / 2;
y = B / 2;
x = x + y;
y = x - y;
console.log(x);
console.log(y);
