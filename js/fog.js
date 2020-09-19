var particles = [];   
var particleCount = 60;
var maxVelocity = 2;
var targetFPS = 33;
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var borderTop = 0.01 * canvasHeight;
var borderBottom = 0.99 * canvasHeight;
var imageObj = new Image();
//imageObj.onload = function() {
//  particles.forEach(function(particle) {
//    particle.setImage(imageObj);
//  });
//};
//imageObj.src = "http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png"; 
function Particle(context) {
  this.x = 0;
  this.y = 0;
  this.xVelocity = 0;
  this.yVelocity = 0;
  this.radius = 5;
  this.context = context;
  this.draw = function() {
    if (this.image) {
      this.context.drawImage(this.image, this.x - 128, this.y - 128);
      return;
    }
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = "rgba(0, 255, 255, 0.1)";
    this.context.fill();
    this.context.closePath();
  };
  this.update = function() {

    this.x += this.xVelocity;
    this.y += this.yVelocity;
    if (this.x >= canvasWidth) {
      this.xVelocity = -this.xVelocity;
      this.x = canvasWidth;
    }
    else if (this.x <= 0) {
      this.xVelocity = -this.xVelocity;
      this.x = 0;
    }
    if (this.y >= borderBottom) {
      this.yVelocity = -this.yVelocity;
      this.y = borderBottom;
    }
    else if (this.y <= borderTop) {
      this.yVelocity = -this.yVelocity;
      this.y = borderTop;
    }
  };
  this.setPosition = function(x, y) {
    this.x = x;
    this.y = y;
  };
  this.setVelocity = function(x, y) {
    this.xVelocity = x;
    this.yVelocity = y;
  };
  this.setImage = function(image) {
    this.image = image;
  };
}
function generateRandom(min, max) {
  return Math.random() * (max - min) + min;
}
var context;
// Initialise the scene and set the context if possible
function init() {
    var imageObj = new Image();
    imageObj.onload = function() {
    particles.forEach(function(particle) {
    particle.setImage(imageObj);
  });
};
imageObj.src = "http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png";
  var canvas = document.getElementById('myCanvas');
  console.log(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  if (canvas.getContext) {

    context = canvas.getContext('2d');
    for (var i = 0; i < particleCount; ++i) {
      var particle = new Particle(context);
      particle.setPosition(generateRandom(0, canvasWidth), generateRandom(borderTop, borderBottom));
      particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
      particles.push(particle);
    }
  } else {
    alert("Please use a modern browser");
  }
  
  if (context) {
    setInterval(function() {
      // Update the scene befoe drawing
      update();
      // Draw the scene
      draw();
    }, 1000 / targetFPS);
  }
}
// The function to draw the scene
function draw() {
  //  background image
  context.globalAlpha = 1;
        context.globalCompositeOperation = 'source-over';
  context.drawImage(backImg, 0, 0, canvasWidth, canvasHeight);
context.globalAlpha = 0.75;       context.globalCompositeOperation = 'soft-lights';
  // Fog layer
  // Go through all of the particles and draw them.
  particles.forEach(function(particle) {
    particle.draw();
  });
  
}
// Update the scene
function update() {
  particles.forEach(function(particle) {
    particle.update();
  });
}

var backImg = document.getElementById("back");
  // If the context is set then we can draw the scene (if not then the browser does not support canvas)
//  if (context) {
//    setInterval(function() {
//      // Update the scene befoe drawing
//      update();
//      // Draw the scene
//      draw();
 //   }, 1000 / targetFPS);
 // }

  // Initialize the scene
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    init();
  });