var game = {
  players: [],
  addPlayer: function(){
      player = playerConstructor();
      players.push(player);
  }
};
function playerConstructor(name){
  player = {};
  player.name = name;
    player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};
