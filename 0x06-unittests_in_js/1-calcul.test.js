const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {

    // Returns the sum of two rounded numbers when type is 'SUM'
    it('should return the sum of two rounded numbers when type is "SUM"', () => {
        const result = calculateNumber('SUM', 2.5, 3.7);
        assert.strictEqual(result, 7);
    });

    // Returns the subtraction of two rounded numbers when type is 'SUBTRACT'
    it('should return the subtraction of two rounded numbers when type is "SUBTRACT"', () => {
        const result = calculateNumber('SUBTRACT', 5.8, 2.3);
        assert.strictEqual(result, 4);
    });

    // Returns the division of two rounded numbers when type is 'DIVIDE' and the second number is not zero
    it('should return the division of two rounded numbers when type is "DIVIDE" and the second number is not zero', () => {
        const result = calculateNumber('DIVIDE', 10.5, 2);
        assert.strictEqual(result, 5.5);
    });

    // Returns the sum of two rounded negative numbers when type is 'SUM'
    it('should return the sum of two rounded negative numbers when type is "SUM"', () => {
        const result = calculateNumber('SUM', -2.5, -3.7);
        assert.strictEqual(result, -6);
    });

    // Returns the subtraction of two rounded negative numbers when type is 'SUBTRACT'
    it('should return the subtraction of two rounded negative numbers when type is "SUBTRACT"', () => {
        const result = calculateNumber('SUBTRACT', -5.8, -2.3);
        assert.strictEqual(result, -4);
    });

    // Returns the division of two rounded negative numbers when type is 'DIVIDE' and the second number is not zero
    it('should return the division of two rounded negative numbers when type is "DIVIDE" and the second number is not zero', () => {
        const result = calculateNumber('DIVIDE', -10.5, 2);
        assert.strictEqual(result, -5);
    });
});
