function Animal(){}

Animal.prototype.eat = function(){
    return "nom nom nom";
}

function Bird(){}

Bird.prototype = Object.create(Animal.prototype)

console.log(Animal())

Bird.prototype.eat = function(){
    return "peck peck peck";
}

let luck = new Animal()
console.log(luck.eat())