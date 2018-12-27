


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sheep.png') {
      myImage.setAttribute ('src','images/pig.png');
    } else {
      myImage.setAttribute ('src','images/sheep.png');
    }
}
