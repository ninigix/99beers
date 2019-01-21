const Utils = require("./utils");
const Bottle = require("./bottle");

class Lyrics {
    song() {
        const firstVerse = 99;
        return this.verses(firstVerse);
    }

    verses(firstVerse, lastVerse = 0) {
        return [...this.constructor.createVerse(firstVerse, lastVerse)].join('\n\n');
    }

    verse(verseNumber) {
        return this.constructor.createVerse(verseNumber, verseNumber - 1).next().value;
    }

    static *createVerse(firstVerse, lastVerse) {
        let bottle = Bottle.getBottle(firstVerse);
        for(let i = firstVerse; i>= lastVerse; --i){
            const nextBottle = bottle.nextBottle;
            yield (`${Utils.makeCapitalLetter(bottle.quantity)} ${bottle.type} of beer on the wall, ` +
                `${bottle.quantity} ${bottle.type} of beer.\n` +
                `${bottle.action}, ` +
                `${nextBottle.quantity} ${nextBottle.type} of beer on the wall.`);
            bottle = nextBottle;
        }
    }
}

module.exports = Lyrics;