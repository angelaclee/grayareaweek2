function init(){
    var canvas = document.querySelector('canvas');
    var buffer = document.createElement('canvas');
    var canvasCBR = canvas.getBoundingClientRect();

    canvas.width = canvasCBR.width;
    canvas.height = canvasCBR.height;
    buffer.width = canvas.width;
    buffer.height = canvas.height;

    var ctx = canvas.getContext('2d');
    var bufferCtx = buffer.getContext('2d');
    var canvasHeight, canvasWidth;
    var animations = [];
    var numberOfDrops = 220;

    var createDrop = function(){
      var drop = {};
      drop.color = 'white';
      drop.y = anime.random(0, canvas.height);
      drop.draw = function(context){
        context.globalAlpha = drop.alpha;
        context.beginPath();
        context.clearRect(drop.x, drop.y, drop.width, drop.height);
        if(drop.y > canvas.height){
          drop.y -= canvas.height;
          drop.update();
        }else{
          drop.y += drop.speed;
        }
        context.rect(drop.x, drop.y, drop.width, drop.height);
        context.fillStyle = drop.color;
        context.fill();
        context.globalAlpha = 1;
      }
      drop.update = function(){
        drop.x = anime.random(0, canvas.width);
        drop.width = anime.random(.6, 1, .9, .3);
        drop.height = anime.random(5, 8, 3, 1);
        drop.alpha = anime.random(25, 1, 3, 44);
        drop.speed = anime.random(5, 4, 3, 2);
      }
      drop.update();
      return drop;
    };

    var getRainDrops = function(){
      var drops = [];
      for(var i = 0; i < numberOfDrops; i++){
        drops.push(createDrop());
      }
      return drops;
    };

    var rainDrops = getRainDrops();

    anime({
      targets: rainDrops,
      duration: Infinity,
      easing: 'linear',
      update: function(){
        rainDrops.forEach(function(drop){
          drop.draw(bufferCtx);
        });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(buffer, 0, 0);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);

  document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.createElement('canvas')

    var container = document.querySelector('.rain')

    container.appendChild(canvas)

  })


