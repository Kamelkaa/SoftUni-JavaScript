const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

const { expect } = require('chai');

describe("Tests Number Operations", function () {
    describe("Test function powNumber", function () {
        it("Power given number", function () {
            expect(numberOperations.powNumber(2)).to.be.equal(4);
        });
    });

    describe("Test function numberChecker", function () {
        it("Input is not a number throw error", function () {
            expect(() => numberOperations.numberChecker('a')).to.be.Throw('The input is not a number!');
            expect(() => numberOperations.numberChecker()).to.be.Throw('The input is not a number!');
        });

        it("Input is lower then 100", function () {
            expect(numberOperations.numberChecker(99)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('18')).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-5)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(null)).to.be.equal('The number is lower than 100!')
        });

        it("Input is greater then 100", function () {
            expect(numberOperations.numberChecker(101)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('120')).to.be.equal('The number is greater or equal to 100!');
        });

        it("Input is equal to 100", function () {
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('100')).to.be.equal('The number is greater or equal to 100!');
        });
    });

    describe("Test function sumArrays", function () {
        it("Sum arrays", function () {
            expect(numberOperations.sumArrays([1, 2, 3, 4], [1, 2, 3])).to.eql([2, 4, 6, 4]);
            expect(numberOperations.sumArrays([null, 2, 3, 4], [1, 2, 3])).to.eql([1, 4, 6, 4]);
            expect(numberOperations.sumArrays(['1', 2, 3, 4], [1, 2, 3])).to.eql(['11', 4, 6, 4]);
            expect(numberOperations.sumArrays(['a', 'b', 'c', 'd'], ['a', 'b', 'c'])).to.eql(['aa', 'bb', 'cc', 'd']);
        });
    });
});
