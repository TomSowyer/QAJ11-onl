import assert from "assert"
import { Calculator } from "../src/calculator"
import { mistakeMessage } from "../const/consts";

describe('Multiply check', () => {
    const calc = new Calculator();

    it('Multiply all negative', () => {
        const someNumb = calc.multiply(-1, -2)

        assert.deepEqual(someNumb, -1 * -2, mistakeMessage)
    });
    it('Multiply one negative', () => {
        const someNumb = calc.multiply(1, -2)

        assert.deepEqual(someNumb, 1 * -2, mistakeMessage)
    });
    it('Multiply two negative max int', () => {
        const someNumb = calc.multiply(-2147483648, -2147483648)

        assert.deepEqual(someNumb, -2147483648 * -2147483648, mistakeMessage)
    });
    it('Multiply one negative max int', () => {
        const someNumb = calc.multiply(-2147483648, 2147483648)

        assert.deepEqual(someNumb, -2147483648 * 2147483648, mistakeMessage)
    });
    it('Multiply two positive max int', () => {
        const someNumb = calc.multiply(2147483648, 2147483648)

        assert.deepEqual(someNumb, 2147483648 * 2147483648, mistakeMessage)
    });
    it('Multiply two positive  bigInt', () => {
        const someNumb = calc.multiply(21474836489, 21474836489)

        assert.deepEqual(someNumb, 21474836489 * 21474836489, mistakeMessage)
    });
    it('Multiply two negative non-integer', () => {
        const someNumb = calc.multiply(-1.123456789, -1.123456789)

        assert.deepEqual(someNumb, -1.123456789 * -1.123456789, mistakeMessage)
    });
    it('Multiply one negative non-integer', () => {
        const someNumb = calc.multiply(-1.123456789, 1.123456789)

        assert.deepEqual(someNumb, -1.123456789 * 1.123456789, mistakeMessage)
    });
    it('Multiply two positive non-integer', () => {
        const someNumb = calc.multiply(1.123456789, 1.123456789)

        assert.deepEqual(someNumb, 1.123456789 * 1.123456789, mistakeMessage)
    });
    it('Multiply one negative non-integer and int', () => {
        const someNumb = calc.multiply(-1.123456789, -5)

        assert.deepEqual(someNumb, -1.123456789 * -5, mistakeMessage)
    });
    it('Multiply one positive non-integer and int', () => {
        const someNumb = calc.multiply(1.123456789, 5)

        assert.deepEqual(someNumb, 1.123456789 * 5, mistakeMessage)
    });
    it('Multiply one positive non-integer with zero', () => {
        const someNumb = calc.multiply(1.123456789, 0)

        assert.deepEqual(someNumb, 1.123456789 * 0, mistakeMessage)
    });
});
