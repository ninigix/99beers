class Utils {
    static makeCapitalLetter(quantity) {
        return Number.isInteger(quantity) ? quantity : quantity[0].toUpperCase() + quantity.substr(1);
    }
}

module.exports = Utils;