function Animal(){

}

Animal.prototype = {
	constructor: Animal,

	eat: function(){
		console.log("nom nom nom");
	}
}

function Dog(){

}

Dog.prototype = Object.create(Animal.prototype)

let bengle = new Dog()
console.log(bengle.eat())