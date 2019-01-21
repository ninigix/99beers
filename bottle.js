class Bottle {
    constructor(quantity, type, action) {
        this.quantity = quantity;
        this.type = type;
        this.action = action;
    }

    static getBottle(quantity) {
        switch (quantity) {
            case 0:
                return new Bottle('no more', 'bottles', 'Go to the store and buy some more');
            case 1:
                return new Bottle(quantity, 'bottle', 'Take it down and pass it around');
            default:
                return new Bottle(quantity, 'bottles', `Take one down and pass it around`)
        }
    }

    get nextBottle() {
        return Bottle.getBottle(this.quantity === 'no more' ? 99 : this.quantity - 1);
    }
}

module.exports = Bottle;