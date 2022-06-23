const { expect } = require('chai');
const isSymmetric = require('./05-checkForSymmetry').isSymmetric;

describe('Check for symetry', () => {
    it('return false for incorrect input type', () => {
        let string = "test";
        expect(isSymmetric(string)).to.be.false;
    });

    it('return false for incorrect input type', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('return false when input array is not symmetric', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('return true when input array is symmetric', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });

    it('return true when input array is symmetric', () => {
        expect(isSymmetric(['a', 'b', 'c', 'b', 'a'])).to.be.true;
    });

    it('return false when input array is not symmetric', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });

    it('return false when input array is not symmetric and elements are with diferent type', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });

});