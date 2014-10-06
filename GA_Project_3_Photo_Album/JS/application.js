var images = ["img/photo_0.jpg", "img/photo_1.jpg", "img/photo_2.jpg", "img/photo_3.jpg", "img/photo_4.jpg", "img/photo_5.jpg", "img/photo_6.jpg"];
var currentImage = 0;

function switchPhoto(choose) {
	var img = document.getElementById('mainPicture');
	img.setAttribute('src', images[choose]);
	currentImage = choose;
}

function nextPhoto() {
	currentImage++;
	if(currentImage===images.length){
		currentImage = 0;
	}
	var img = document.getElementById('mainPicture'); // You're using this same variable in 3 functions. If you made it a global variable, it would help condense your code.
	img.setAttribute('src', images[currentImage]);
}

function prevPhoto() {
	currentImage = currentImage - 1;
	if(currentImage===-1){
		currentImage = 0;
	}
	var img = document.getElementById('mainPicture');
	img.setAttribute('src', images[currentImage]);
}
