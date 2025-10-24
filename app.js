let oneEuroIs = {
    "JPY": 156.5, // 1 EUR = 156.5 JPY
    "USD": 1.07,  // 1 EUR = 1.07 USD
    "GBP": 0.87,  // 1 EUR = 0.87 GBP
}

//Euro a Dolar
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
}

//Dolar a Euro
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    //Euro a YEN
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return Math.round(valueInYen * 10) / 10;
    return valueInYen;
}

//YEN a Libra
const fromYenToPound = function(valueInYen) {
      let valueInEuro = valueInYen / oneEuroIs.JPY;
    //Euro a Libra
    let valueInPound = valueInEuro * oneEuroIs.GBP;
        return valueInPound;
}

// Export
module.exports = { 
    fromEuroToDollar, 
    fromDollarToYen, 
    fromYenToPound 
};