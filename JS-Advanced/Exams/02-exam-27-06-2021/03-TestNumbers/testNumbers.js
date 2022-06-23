const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

const { expect } = require('chai');

describe("Tests task test numbers…", function () {
    describe("Test sumNumbers", function () {
        it("Should trow when parameters are not numbers", function () {
            expect(testNumbers.sumNumbers('5', 6)).to.be.undefined;
            expect(testNumbers.sumNumbers(6, '6')).to.be.undefined;
            expect(testNumbers.sumNumbers('dfg', 'dgs5')).to.be.undefined;
            expect(testNumbers.sumNumbers(null, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 2)).to.be.undefined;
        });

        it("Should work when parameters are numbers", function () {
            expect(testNumbers.sumNumbers(5, 6)).to.be.equal('11.00');
            expect(testNumbers.sumNumbers(-1, 5)).to.be.equal('4.00');
            expect(testNumbers.sumNumbers(5, -1)).to.be.equal('4.00');
            expect(testNumbers.sumNumbers(3.111, 3.111)).to.be.equal('6.22');
        });
    });

    describe("Test numberChecker", function () {
        it("Shuld work with even values", function () {
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.be.equal('The number is even!');
        });

        it("Shuld work with odd values", function () {
            expect(testNumbers.numberChecker(1)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker('1')).to.be.equal('The number is odd!');
        });

        it("Shuld throw when is not a number", function () {
            expect(() => testNumbers.numberChecker('a')).to.be.Throw('The input is not a number!');
        });
    });

    describe("Test averageSumArray", function () {
        it("Return average sum", function () {
            expect(testNumbers.averageSumArray([2, 2, 2])).to.be.equal(2);
            expect(testNumbers.averageSumArray([2.5, 2.5, 2.5])).to.be.equal(2.5);
        });
    });
});