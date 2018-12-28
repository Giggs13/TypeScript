/*
let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            const pickedCard = Math.floor(Math.random() * 52);
            const pickedSuit = Math.floor(pickedCard / 13);

            return {
                suit: this.suits[pickedSuit], card: pickedCard % 13
            };
        };
    }
};

let cardPicker = deck.createCardPicker();
cardPicker = cardPicker.bind(deck);
let pickedCardObj = cardPicker();

console.log('card: ' + pickedCardObj.card + ' of ' + pickedCardObj.suit);
*/
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCardObj = cardPicker();
console.log('card: ' + pickedCardObj.card + ' of ' + pickedCardObj.suit);
