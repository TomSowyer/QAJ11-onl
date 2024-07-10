import assert from "assert"
import { Calculator } from "../src/calculator"
import { mistakeMessage } from "../const/consts";

describe('Divide check', () => {
    const calc = new Calculator();

    it('Divide all negative', () => {
        const someNumb = calc.divide(-1, -2)

        assert.deepEqual(someNumb, -1 / -2, mistakeMessage)
    });
    it('Divide one negative', () => {
        const someNumb = calc.divide(1, -2)

        assert.deepEqual(someNumb, 1 / -2, mistakeMessage)
    });
    it('Divide two negative max int', () => {
        const someNumb = calc.divide(-2147483648, -2147483648)

        assert.deepEqual(someNumb, -2147483648 / -2147483648, mistakeMessage)
    });
    it('Divide one negative max int', () => {
        const someNumb = calc.divide(-2147483648, 2147483648)

        assert.deepEqual(someNumb, -2147483648 / 2147483648, mistakeMessage)
    });
    it('Divide two positive max int', () => {
        const someNumb = calc.divide(2147483648, 2147483648)

        assert.deepEqual(someNumb, 2147483648 / 2147483648, mistakeMessage)
    });
    it('Divide two positive  bigInt', () => {
        const someNumb = calc.divide(21474836489, 21474836489)

        assert.deepEqual(someNumb, 21474836489 / 21474836489, mistakeMessage)
    });
    it('Divide two negative non-integer', () => {
        const someNumb = calc.divide(-1.123456789, -1.123456789)

        assert.deepEqual(someNumb, -1.123456789 / -1.123456789, mistakeMessage)
    });
    it('Divide one negative non-integer', () => {
        const someNumb = calc.divide(-1.123456789, 1.123456789)

        assert.deepEqual(someNumb, -1.123456789 / 1.123456789, mistakeMessage)
    });
    it('Divide two positive non-integer', () => {
        const someNumb = calc.divide(1.123456789, 1.123456789)

        assert.deepEqual(someNumb, 1.123456789 / 1.123456789, mistakeMessage)
    });
    it('Divide one negative non-integer and int', () => {
        const someNumb = calc.divide(-1.123456789, -5)

        assert.deepEqual(someNumb, -1.123456789 / -5, mistakeMessage)
    });
    it('Divide one positive non-integer and int', () => {
        const someNumb = calc.divide(1.123456789, 5)

        assert.deepEqual(someNumb, 1.123456789 / 5, mistakeMessage)
    });
    it('Divide one positive non-integer with zero', () => {
        const someNumb = calc.divide(1.123456789, 0)

        assert.deepEqual(someNumb, 1.123456789 / 0, mistakeMessage)
    });
});
