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

console.log(testNumbers.sumNumbers());
console.log(testNumbers.sumNumbers('dfdgd', 5));
console.log(testNumbers.sumNumbers('5', 5));
console.log(testNumbers.sumNumbers([1], 5));

const { expect } = require('chai');

describe("Test numbers", function () {
    describe("test sumNumbers", function () {
        it("elemetns are not numbers", function () {
            expect(testNumbers.sumNumbers()).to.be.undefined;
            expect(testNumbers.sumNumbers('5', 5)).to.be.undefined;
            expect(testNumbers.sumNumbers(5, '5')).to.be.undefined;
            expect(testNumbers.sumNumbers(5, 'a')).to.be.undefined;
            expect(testNumbers.sumNumbers('a', 5)).to.be.undefined;
            expect(testNumbers.sumNumbers('b', 'a')).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined;

        });

        it("elemetns are numbers", function () {
            expect(testNumbers.sumNumbers(5, 5)).to.be.equal('10.00');
            expect(testNumbers.sumNumbers(-5, 6)).to.be.equal('1.00');
            expect(testNumbers.sumNumbers(5, -6)).to.be.equal('-1.00');
            expect(testNumbers.sumNumbers(5.5050505, 5)).to.be.equal('10.51');
        });
    });

    describe("test numberChecker", function () {
        it("input is not a number", function () {
            expect(() => testNumbers.numberChecker('a')).to.be.throw('The input is not a number!');
        });

        it("input is a odd", function () {
            expect(testNumbers.numberChecker('2')).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
        });

        it("input is a even", function () {
            expect(testNumbers.numberChecker('3')).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker(3)).to.be.equal('The number is odd!');
        });
    });

    describe("test averageSumArray", function () {
        it("calculate average sum of array", function () {
            expect(testNumbers.averageSumArray([2, 2, 2])).to.be.equal(2);
            expect(testNumbers.averageSumArray([2.5, 2.5, 2.5])).to.be.equal(2.5);
        });
    });
});
