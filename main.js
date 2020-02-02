let bird = {
    name: 'Donald',
    numLegs: 2
}

let plane = {
    model: '777',
    numPassengers: 542
}

let flyMixin = (obj) => {
    obj.fly = function(){
        console.log('Something')
    }
}

flyMixin(bird)

bird.fly()

console.log(bird)