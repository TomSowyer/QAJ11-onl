import assert from "assert"
import { Calculator } from "../src/calculator"
import { mistakeMessage } from "../const/consts";

describe('Subtract check', () => {
    const calc = new Calculator();

    it('Subtract all negative', () => {
        const someNumb = calc.subtract(-1, -2)

        assert.deepEqual(someNumb, -1 - (-2), mistakeMessage)
    });
    it('Subtract one negative', () => {
        const someNumb = calc.subtract(-1, 2)

        assert.deepEqual(someNumb, -1 - 2, mistakeMessage)
    });
    it('Subtract two negative max int', () => {
        const someNumb = calc.subtract(-2147483648, -2147483648)

        assert.deepEqual(someNumb, -2147483648 - (-2147483648), mistakeMessage)
    });
    it('Subtract two positive  bigInt', () => {
        const someNumb = calc.subtract(2147483648999999, 2147483648999999)

        assert.deepEqual(someNumb, 2147483648999999 - 2147483648999999, mistakeMessage)
    });
    it('Subtract one negative max int', () => {
        const someNumb = calc.subtract(-2147483648, 2147483648)

        assert.deepEqual(someNumb, -2147483648 - 2147483648, mistakeMessage)
    });
    it('Subtract two positive max int', () => {
        const someNumb = calc.subtract(2147483648, 2147483648)

        assert.deepEqual(someNumb, 2147483648 - 2147483648, mistakeMessage)
    });
    it('Subtract two negative non-integer', () => {
        const someNumb = calc.subtract(-1.123456789, -1.123456789)

        assert.deepEqual(someNumb, -1.123456789 - (-1.123456789), mistakeMessage)
    });
    it('Subtract one negative non-integer', () => {
        const someNumb = calc.subtract(-1.123456789, 1.123456789)

        assert.deepEqual(someNumb, -1.123456789 - 1.123456789, mistakeMessage)
    });
    it('Subtract two positive non-integer', () => {
        const someNumb = calc.subtract(1.123456789, 1.123456789)

        assert.deepEqual(someNumb, 1.123456789 - 1.123456789, mistakeMessage)
    });
    it('Subtract one negative non-integer and int', () => {
        const someNumb = calc.subtract(-1.123456789, -5)

        assert.deepEqual(someNumb, -1.123456789 - (-5), mistakeMessage)
    });
    it('Subtract one positive non-integer and int', () => {
        const someNumb = calc.subtract(1.123456789, 5)

        assert.deepEqual(someNumb, 1.123456789 - 5, mistakeMessage)
    });
    it('Subtract one positive non-integer with zero', () => {
        const someNumb = calc.subtract(1.123456789, 0)

        assert.deepEqual(someNumb, 1.123456789 - 0, mistakeMessage)
    });
})