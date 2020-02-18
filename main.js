function foo(){
    console.log(this.bar);
}

var bar = 'global'

var obj1 = {
    bar: 'obj1',
    foo: foo
}
var obj2 = {
    bar: 'obj2'
}

console.log(foo())
console.log(obj1.foo())
console.log(foo.call(obj2))