const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {

    // Returns the sum of two positive integers
    it('should return the sum of two positive integers', () => {
        const result = calculateNumber(2, 3);
        assert.equal(result, 5);
    });

    // Returns the sum of integer and float
    it('should return the sum of integer and float', () => {
        const result = calculateNumber(2, 3.7);
        assert.equal(result, 6);
    });

    // Returns sum of two floats
    it('should return sum of two floats', () => {
        const result = calculateNumber(2.5, 3.7);
        assert.equal(result, 7);
    });
    
    // Returns the sum of two positive integers
    it('should return the sum of two positive integers', () => {
        const result = calculateNumber(2, 3);
        assert.equal(result, 5);
    });

    // Returns the sum of integer and float
    it('should return the sum of integer and float', () => {
        const result = calculateNumber(2, 3.7);
        assert.equal(result, 6);
    });

    // Returns sum of two floats
    it('should return sum of two floats', () => {
        const result = calculateNumber(2.5, 3.7);
        assert.equal(result, 7);
    });

    // Returns the sum of two very large floats
    it('should return the sum of two very large floats', () => {
        const result = calculateNumber(1e20, 2e20);
        assert.equal(result, 3e20);
    });

    // Returns the sum of Infinity and a number
    it('should return the sum of Infinity and a number', () => {
        const result = calculateNumber(Infinity, 5);
        assert.equal(result, Infinity);
    });
});
