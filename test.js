// Importar funciones
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Pruebas

    test("One euro should be 1.07 dollars", function()  {
        expect(fromEuroToDollar(3.5)).toBe(3.745);
    });

    test('10 Euros deberían ser 10.7 Dólares', () => {
        expect(fromEuroToDollar(10)).toBeCloseTo(10.7);
    });

    test('5999 Yenes deberían ser aprox. 33.349 Libras', () => {
        expect(fromYenToPound(5999)).toBeCloseTo(33.3495);
