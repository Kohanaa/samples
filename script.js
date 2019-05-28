document.addEventListener('DOMContentLoaded', function(event) {
  //the event occurred
var orcEl = document.getElementById("orc");
var frameX = -1;
var x = 0;
var y = 0;
var skins = [
  'img/troll-red.png',
  'img/troll-green_3.png',
  'img/troll-brown.png',
  'img/troll-darkgreen.png'
  ]
var skinId = 0;
var direction = 'right';
var frameY = 1;
document.onkeyup = function(event) {
  if (event.key == 'ArrowRight') {
    direction = "right";
    frameY = 1;
  }
  if (event.key == 'ArrowLeft') {
    direction = "left";
    frameY = 3;
  }
  if (event.key == 'ArrowUp') {
    direction = "top";
    frameY = 0;
  }
  if (event.key == 'ArrowDown') {
    direction = "bottom";
    frameY = 2;
  }
  if (event.key == ' ') {
    skinId += 1;
    if (skinId >= skins.length) {
      skinId = 0
    }
    orcEl.style.backgroundImage='url('+skins[skinId]+')';
  }

  console.log(event);
}
setInterval(function() {
  frameX += 1;
  if (frameX == 3) {
    frameX = 0;
  }
  if (direction == 'right' && x > 500 - 48) {
    direction = 'left';
    frameY = 3;
  }
  if (direction == 'left' && x < 0) {
    direction = 'right';
    frameY = 1;
  }
  if (direction == 'top' && y < 0) {
    direction = 'bottom';
    frameY = 2;
  }
  if (direction == 'bottom' && y > 300 - 64) {
    direction = 'top';
    frameY = 0;
  }


  if (direction == 'right') {
    x += 5;
  } else if (direction == 'left') {
    x -= 5;
  } else if (direction == 'top') {
    y -= 5;
  } else {
    y += 5;
  }

  orcEl.style.left = x + 'px';
  orcEl.style.top = y + 'px';
  orcEl.style.backgroundPosition = '-' + frameX * 48 + 'px -' + frameY * 64 + 'px';
}, 50)
})
