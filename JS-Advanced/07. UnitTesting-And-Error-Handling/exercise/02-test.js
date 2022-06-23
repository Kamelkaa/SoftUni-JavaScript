const { expect } = require('chai');
const isOddOrEven = require('./02-evenOrOdd').isOddOrEven;

describe('Even or odd', () => {
    it('When parameter is type number return undefined', () => {
        expect(isOddOrEven(5)).to.be.undefined;
    });

    it('When parameter is type array return undefined', () => {
        expect(isOddOrEven([1, '2', 3])).to.be.undefined;
    });

    it('When parameter length is odd return odd', () => {
        let string = 'hello';
        expect(isOddOrEven(string)).to.be.equals('odd');
    });

    it('When parameter length is even return even', () => {
        let string = 'hi';
        expect(isOddOrEven(string)).to.be.equals('even');
    });

    it('Test with multiple different strings', () => {
        let string1 = 'hi';
        let string2 = 'hello';
        let string3 = 'test123';
        expect(isOddOrEven(string1)).to.be.equals('even');
        expect(isOddOrEven(string2)).to.be.equals('odd');
        expect(isOddOrEven(string3)).to.be.equals('odd');
    });
});