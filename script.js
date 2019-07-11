document.addEventListener('DOMContentLoaded', function(event) {
var game={
  status:true,
  location:1,
  changeBg:function(bg){
    var stage=document.getElementById("stage");
    stage.style.backgroundImage=`url(img/bg/${bg})`
  }
}
game.door=new Door("exit",450,250);
game.hero=new Hero("orc",50,50);
game.enemies=[];
var enemy=new Enemy("enemy", 300,150);
game.enemies.push(enemy);
var enemy1=new Enemy("enemy-1",-100,-100);
enemy1.speed=0;
game.enemies.push(enemy1);
setInterval(function() {
  if (!game.status){
    return
  }
  game.hero.move();
  if(intersect(game.door,game.hero,30)){
    game.status=false;
    openLocation(game);
  }
  game.enemies.forEach(function(enemy,index){
    enemy.move();
    if(intersect(enemy,game.hero,50)){
      game.status=false;
      game.location=0;
      openLocation(game);
    }
    enemy.draw();
  });
  game.hero.draw();
}, 50)
})
