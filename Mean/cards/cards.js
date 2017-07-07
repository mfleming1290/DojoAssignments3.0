function card(value, suit) {
    this.value = value;
    this.suit = suit;
}

function deck(){
	this.buildDeck();

}

deck.prototype.buildDeck = function() {
    var value = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits = ['Hearts','Diamonds','Spades','Clubs'],
    self = this;

    this.cards = [];
    suits.forEach(function(suit){
        value.forEach(function(value){
            self.cards.push(new card(value, suit));
    });
  });
    return this;
}



deck.prototype.shuffle = function() {
    this.cards.sort(function() { return 0.5 - Math.random() })
    return this;
}

deck.prototype.check = function() {
    console.log(this.cards);
    return this;
}

deck.prototype.reset = function() {
    this.buildDeck().shuffle()
    return this;
}

deck.prototype.deal = function() {
    if(this.cards.length > 0){
        return this.cards.pop();
    }
    else {
        return null;
    }
}

function player(name) {
    this.name = name;
    this.hand = [];
}

player.prototype.takeCard = function(deck) {
    this.hand.push(deck.deal());
    return this;
}

player.prototype.discard = function(cardIdx){
  if (this.hand.length > cardIDX){
      this.hand.splice(cardIDX, 1);
  }
  return this;
}
