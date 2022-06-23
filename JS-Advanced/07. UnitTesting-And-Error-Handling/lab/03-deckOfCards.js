function deckOfCards(cards) {
    let result = [];

    for (let card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        try {
            result.push(createACard(face, suit));
        } catch (ex) {
            console.log(`Invalid card: ` + card);
            return;
        }
    }

    console.log(result.join(' '));

    function createACard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (Object.keys(suits).includes(suit) == false || faces.includes(face) == false) {
            throw new Error(`Invalid card: ${face, suit}`);
        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        };
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);