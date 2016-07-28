
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateChirp(length, birdSounds) {
  var chirp = '';
  for (var i = 0; i < length; i++) {
    var sound = birdSounds[getRandomInt(0,5)];
    chirp = chirp + ' ' + sound;
  }
  return chirp;
}

var changeContent = function () {
  var images = document.querySelectorAll("img:not(.chirped)");
  for (var i = 0, l = images.length; i < l; i++) {
    images[i].src = 'http://p-hold.com/birds/' + images[i].width + '/' + images[i].height;
    images[i].className += " chirped";
  }

  var birdSounds = ['tweet', 'ptweet', 'chirp', 'squak', 'honk'];
  // document.querySelector("p:not([chirped])")
  // var tweetsAll = document.getElementsByClassName('tweet-text');
  var tweets = document.querySelectorAll("p:not(.chirped).tweet-text")
  for (var i = 0, l = tweets.length; i < l; i++) {
    var loopLength = Math.floor(tweets[i].textContent.length / 6);
    var chirp = generateChirp(loopLength, birdSounds);
    tweets[i].innerHTML = chirp;
    tweets[i].className += " chirped";
  }
}
changeContent();
setInterval(changeContent, 5000);