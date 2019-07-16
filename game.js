var levels=[{
  //0
},{
    name:"first level",
    bg:"preview.jpg",
    heroX:50,
    heroY:50,
    doorX:450,
    doorY:250,
    enemies:[{
      enemyX:300,
      enemyY:150,
      enemyD:"right",
      enemyS:5
    },null]
},{
  name:"swamp",
  bg:"swamp.png",
  heroX:40,
  heroY:40,
  doorX:300,
  doorY:200,
  enemies:[{
    enemyX:200,
    enemyY:200,
    enemyD:"top",
    enemyS:10
  },
  {
    enemyX:100,
    enemyY:100,
    enemyD:"right",
    enemyS:4
  }
]
},{
  name:"forest",
  bg:"forest.jpg",
  heroX:405,
  heroY:200,
  doorX:40,
  doorY:40,
  enemies:[{
    enemyX:300,
    enemyY:150,
    enemyD:"left",
    enemyS:7
  },null]
}];

function openLocation(game){
  game.location+=1;
  if (game.location>=levels.length){
    alert("game completed");
    return
  }
  var level=levels[game.location];
  alert("Welcome to locaition " +level.name);
  game.changeBg(level.bg);
  game.status=true;
  game.hero.x=level.heroX;
  game.hero.y=level.heroY;
  game.door.x=level.doorX;
  game.door.y=level.doorY;
  game.enemies.forEach(function(enemy,index){
    debugger;
    var settings={
      enemyX:-100,
      enemyY:-100,
      enemyD:"left",
      enemyS:0
    }
    if (level["enemies"][index]){
      settings=level["enemies"][index];
      enemy.x=settings.enemyX;
      enemy.y=settings.enemyY;
      enemy.speed=settings.enemyS;
      enemy.direction=settings.enemyD;
    }
  });
  game.door.draw();
}
