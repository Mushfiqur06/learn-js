//Build-in browser function
// let myText = 'I am a String';
// let newString = myText.replace('String', 'I am another String');
// //console.log(newString);

// let myArray = ['I', 'love', 'JavaScript'];
// let madeString = myArray.join(' ');
// console.log(madeString);

//learn array sorting
// let arr = [12, 45, 67, 90, 1, 46, 678];

//Create a sorting function
// function sort(arr, cb){
//     for(var i = 0; i < arr.length; i++){
//         for(var j = 0; j < i; j++){
//             var result = cb(arr[i], arr[j]);

//             if(result < 0){
//                 var temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// }

// sort(arr, (a, b) => {
//     if(a > b){
//         return 1;
//     }else if(a < b){
//         return -1;
//     }else{
//         return 0;
//     }
// });

// console.log(arr)

// let homes = [
//     {
//         "h_id": "3",
//         "city": "Dallas",
//         "state": "TX",
//         "zip": "95201",
//         "price": "162500"
//     }, {
//         "h_id": "4",
//         "city": "Bevery Hills",
//         "state": "CA",
//         "zip": "75201",
//         "price": "200"
//     }, {
//         "h_id": "5",
//         "city": "New York",
//         "state": "NY",
//         "zip": "00010",
//         "price": "962500"
//     }
// ];

// homes.sort((a, b) => {
//     return parseFloat(a.price) - parseFloat(b.price);
// })
// console.log(homes)

// let a = 10;
// let b = a;
// a = 0;
// console.log(b);

// function duplicateSpreadsheet(orginal) {
// 	if (orginal.hasPaddingChanges) {
// 		throw new Error(
// 			'You need to save the file before you can duplicate the file'
// 		);
// 	}

// 	let copy = {
// 		created: Date.now(),
// 		author: orginal.author,
// 		cells: orginal.cells,
// 		metadata: orginal.metadata
// 	};
// 	copy.metadata.title = 'Copy of' + orginal.metadata.title;

// 	return copy;
// }

var arr = [2, 45, 67, 34];

var newArray = [];
arr.forEach(num => {
	if (num > 50) {
		newArray.push(num);
	}
});

console.log(newArray);
