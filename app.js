//Build-in browser function
let myText = 'I am a String';
let newString = myText.replace('String', 'I am another String');
//console.log(newString);

let myArray = ['I', 'love', 'JavaScript'];
let madeString = myArray.join(' ');
console.log(madeString);

//learn array sorting
let arr = [12, 45, 67, 90, 1, 46, 678];

//Create a sorting function
function sort(arr, cb){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < i; j++){
            var result = cb(arr[i], arr[j]);

            if(result < 0){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

sort(arr, (a, b) => {
    if(a > b){
        return 1;
    }else if(a < b){
        return -1;
    }else{
        return 0;
    }
});

console.log(arr)