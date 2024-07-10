import { Calculator } from "../../src/calculator";


describe('Calc jest check', () => {
    const calc = new Calculator()
    test('add check', () => {
        const numberForCalc = calc.add(1, 2)

        expect(numberForCalc).toBe(1 + 2)
    });
    test('divide check', () => {
        const numberForCalc = calc.divide(100, 500)

        expect(numberForCalc).toBe(100 / 500)
    });
    test('multiply check', () => {
        const numberForCalc = calc.multiply(100.1234, 11.1234567)

        expect(numberForCalc).toBe(100.1234 * 11.1234567)
    });
    test('substract check', () => {
        const numberForCalc = calc.subtract(0.123134235, 10.01)

        expect(numberForCalc).toBe(0.123134235 - 10.01)
    });
})