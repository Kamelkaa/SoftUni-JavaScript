const { expect } = require('chai');
const lookupChar = require('./03-charLookup').lookupChar;

describe('Char lookup', () => {
    it('When first parameter type is a number return undefined', () => {
        expect(lookupChar(5, 5)).to.be.undefined;
    });

    it('When first parameter type is a array return undefined', () => {
        expect(lookupChar([5, '2', 3], 5)).to.be.undefined;
    });

    it('When second parameter type is a floating-point number return undefined', () => {
        let string = 'testFirstParameter';
        expect(lookupChar(string, 5.5)).to.be.undefined;
    });

    it('When first parameter length is less then index return: Incorrect index', () => {
        let string = 'test';
        expect(lookupChar(string, 5)).to.be.equal('Incorrect index');
    });

    it('When second parameter is less then zero return: Incorrect index', () => {
        let string = 'test';
        expect(lookupChar(string, -1)).to.be.equal('Incorrect index');
    });

    it('Function shuild work correctly', () => {
        let string = 'test';
        expect(lookupChar(string, 1)).to.be.equal('e');
    });
});