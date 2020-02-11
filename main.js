function foo(){
    return "Something"
}

foo.bar = 22;

console.log(typeof foo)
console.log(typeof foo())
console.log(typeof foo.bar)