import assert from "assert"
import { Calculator } from "../src/calculator"
import { mistakeMessage } from "../const/consts";

describe('Add check', () => {
    const calc = new Calculator();

    it('add all negative', () => {
        const someNumb = calc.add(-1, -2)

        assert.deepEqual(someNumb, -1 + -2, mistakeMessage)
    });
    it('add one negative', () => {
        const someNumb = calc.add(1, -2)

        assert.deepEqual(someNumb, 1 + -2, mistakeMessage)
    });
    it('add two negative max int', () => {
        const someNumb = calc.add(-2147483648, -2147483648)

        assert.deepEqual(someNumb, -2147483648 + -2147483648, mistakeMessage)
    });
    it('add two positive  bigInt', () => {
        const someNumb = calc.add(2147483648999999, 2147483648999999)

        assert.deepEqual(someNumb, 2147483648999999 + 2147483648999999, mistakeMessage)
    });
    it('add one negative max int', () => {
        const someNumb = calc.add(-2147483648, 2147483648)

        assert.deepEqual(someNumb, -2147483648 + 2147483648, mistakeMessage)
    });
    it('add two positive max int', () => {
        const someNumb = calc.add(2147483648, 2147483648)

        assert.deepEqual(someNumb, 2147483648 + 2147483648, mistakeMessage)
    });
    it('add two negative non-integer', () => {
        const someNumb = calc.add(-1.123456789, -1.123456789)

        assert.deepEqual(someNumb, -1.123456789 + -1.123456789, mistakeMessage)
    });
    it('add one negative non-integer', () => {
        const someNumb = calc.add(-1.123456789, 1.123456789)

        assert.deepEqual(someNumb, -1.123456789 + 1.123456789, mistakeMessage)
    });
    it('add two positive non-integer', () => {
        const someNumb = calc.add(1.123456789, 1.123456789)

        assert.deepEqual(someNumb, 1.123456789 + 1.123456789, mistakeMessage)
    });
    it('add one negative non-integer and int', () => {
        const someNumb = calc.add(-1.123456789, -5)

        assert.deepEqual(someNumb, -1.123456789 + -5, mistakeMessage)
    });
    it('add one positive non-integer and int', () => {
        const someNumb = calc.add(1.123456789, 5)

        assert.deepEqual(someNumb, 1.123456789 + 5, mistakeMessage)
    });
    it('add one positive non-integer with zero', () => {
        const someNumb = calc.add(1.123456789, 0)
        assert.deepEqual(someNumb, 1.123456789+0, mistakeMessage)
    });
});
