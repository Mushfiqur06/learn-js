// var foo = {
//     a: 42
// }
// var bar = Object.create(foo)
// bar.b = 'Hello'
// console.log(bar.a)
// console.log(bar.b)

const num = 3;

function multipleBy2(inputNum) {
  const result = inputNum * 2;
  return result;
}

const output = multipleBy2(num);
const newOutput = multipleBy2(10);

console.log(output);
console.log(newOutput);
