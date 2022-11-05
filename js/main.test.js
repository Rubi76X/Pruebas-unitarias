const suma = require('./main.js')

test('sumar dos numeros 2+2 = 4', () => {
    expect(suma(2,2)).toBe(4);
})

test('sumar dos numeros 20+20 = 40', () => {
    expect(suma(20,20)).toBe(40);
})