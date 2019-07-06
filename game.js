var levels=[{
  //0
},{
  //1
},{
  name:"swamp",
  heroX:40,
  heroY:40,
  doorX:300,
  doorY:200,
},{
  name:"forest",
  heroX:405,
  heroY:200,
  doorX:40,
  doorY:40,
}];
function openLocation(game){
  game.location+=1;
  if (game.location>=levels.length){
    alert("game completed");
    return
  }
  var level=levels[game.location];
  alert("Welcome to locaition " +level.name);
  game.changeBg(level.name);
  game.status=true;
  game.hero.x=level.heroX;
  game.hero.y=level.heroY;
  game.door.x=level.doorX;
  game.door.y=level.doorY;
  game.door.draw();
}
