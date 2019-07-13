//Adding an image changer
var myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'img_2019.jpg'){
		myImage.setAttribute('src', 'img_2010.jpg');
	}else{
		myImage.setAttribute('src', 'img_2019.jpg');
	}
}