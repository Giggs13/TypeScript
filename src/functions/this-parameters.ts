interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];

    createCardPicker(this: Deck, checkedArg: string): () => Card;
}

let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (this: Deck, checkedArg: string) {
        console.log(this);
        console.log(checkedArg);
        return () => {
            console.log('inside an arrow function');
            console.log(this);
            console.log(checkedArg);
            const pickedCard = Math.floor(Math.random() * 52);
            const pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        };
    }
};

let cardPicker = deck.createCardPicker('that\'s it');
let pickedCardObj = cardPicker();

console.log('card: ' + pickedCardObj.card + ' of ' + pickedCardObj.suit);
