function Deck(){
    this.buildDeck();
}

Deck.prototype.buildDeck = function(){
    var suits = ["diamond", "club", "heart", "spade"]
    var values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
    self = this;
    this.cards = [];

    for (let i = 0; i < suits.length; i++){
        for (let j = 0; j < values.length; j++){
            self.cards.push(new Card(values[j], suits[i]));
        }
    }
    return this;
}

function Card(value, suit){
    this.value = value;
    this.suit = suit;
}

var myDeck = new Deck();
console.log(myDeck);

Deck.prototype.shuffle = function(){
    var unshuffled = this.cards.length;
    var cardToShuffleIndex;
    var temp;

    while(unshuffled>0){
        cardToShuffleIndex = Math.floor(Math.random() * unshuffled);
        unshuffled -= 1;

        temp = this.cards[cardToShuffleIndex];
        this.cards[cardToShuffleIndex] = this.cards[unshuffled];
        this.cards[unshuffled] = temp;
    }
    return this;
}

Deck.prototyoe.reset = function(){
    this.buildDeck().shuffle();
}

Deck.prototype.dealCard = function(){
    if (this.cards.length > 0){
        return this.cards.pop();
    }
    else {
        return null;
    }
}


function Player(name){
    this.name = name;
    this.hand = [];
}

Player.prototype.takeCard = function(deck){
    this.hand.push(deck.dealCard());
    return this;
}

Player.prototype.discard = function(cardIndex){
    if (this.hand.length > cardIndex){
        this.hand.splice(cardIndex, 1);
    }
    return this;
}
