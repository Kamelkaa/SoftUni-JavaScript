const { expect } = require('chai');
const sum  = require('./04-sumOfNumbers').sum;

describe('Sum of Numbers', () => {
    it('return the sum of elements inside of arry', () => {
        expect(sum([1, 2, 3])).to.be.equals(6);
    })
});