document.addEventListener('DOMContentLoaded', function(event) {
var game={
  status:true,
  location:1,
  changeBg:function(name){
    var stage=document.getElementById("stage");
    stage.style.backgroundImage=`url(img/bg/${name}.png)`
  }
}
game.door=new Door("exit",450,250);
game.hero=new Hero("orc",50,50);
setInterval(function() {
  if (!game.status){
    return
  }
  game.hero.move();
  if(intersect(game.door,game.hero,30)){
    game.status=false;
    openLocation(game);
  }
  game.hero.draw();
}, 50)
})
