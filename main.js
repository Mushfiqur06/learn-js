function Bird(){
    let weight = 15

    this.getWeight = function(){
        return weight
    }
}

let result = new Bird()
console.log(result.weight)