var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (checkedArg) {
        var _this = this;
        console.log(this);
        console.log(checkedArg);
        return function () {
            console.log('inside an arrow function');
            console.log(_this);
            console.log(checkedArg);
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker('that\'s it');
var pickedCardObj = cardPicker();
console.log('card: ' + pickedCardObj.card + ' of ' + pickedCardObj.suit);
