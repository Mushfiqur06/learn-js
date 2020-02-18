var foo = {
    a: 42
}
var bar = Object.create(foo)
bar.b = 'Hello'
console.log(bar.a)
console.log(bar.b)