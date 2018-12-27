var currentImg = document.querySelector('img');

currentImg.onclick = function () {
    var imgSrc = currentImg.getAttribute('src'); //fetches the source of the image clicked

    if (imgSrc === "images/sheep.png") { // check to see if sheep
        currentImg.setAttribute('src', 'images/pig.png'); //change to pig
    } else {
        currentImg.setAttribute('src', 'images/sheep.png'); // or back to sheep
    }
}
