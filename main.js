let duck = {
    name: 'Mushfiqur'
}
let motionModule = (function(){
    return {
        glideMixin: function(obj){
            obj.glide = function(){
                console.log("Gliding on the water")
            }
        },
        flyMixin: function(obj){
            obj.fly = function(){
                console.log("Flying, wooosh!")
            }
        }
    }
})()

motionModule.flyMixin(duck)

console.log(duck.fly())