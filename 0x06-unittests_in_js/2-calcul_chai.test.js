
const calculateNumber = require('./2-calcul_chai');
const expect = require('chai').expect;

describe('calculateNumber', () => {

    // Returns the sum of two rounded numbers when type is 'SUM'
    it('should return the sum of two rounded numbers when type is \'SUM\'', () => {
        const result = calculateNumber('SUM', 2.5, 3.7);
        expect(result).to.equal(7);
    });

    // Returns the subtraction of two rounded numbers when type is 'SUBTRACT'
    it('should return the subtraction of two rounded numbers when type is \'SUBTRACT\'', () => {
        const result = calculateNumber('SUBTRACT', 5.8, 2.3);
        expect(result).to.equal(4);
    });

    // Returns the division of two rounded numbers when type is 'DIVIDE' and the second number is not zero
    it('should return the division of two rounded numbers when type is \'DIVIDE\' and the second number is not zero', () => {
        const result = calculateNumber('DIVIDE', 10, 2);
        expect(result).to.equal(5);
    });

    // Returns 'Error' when trying to divide by zero
    it('should return \'Error\' when trying to divide by zero', () => {
        const result = calculateNumber('DIVIDE', 10, 0);
        expect(result).to.equal('Error');
    });
});
