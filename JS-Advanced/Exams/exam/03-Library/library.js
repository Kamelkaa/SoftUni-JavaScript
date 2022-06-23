const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function (booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }
};


const { expect } = require('chai');

describe("Library", function () {
    describe("test  calcPriceOfBook", function () {
        it("Throw invalid input", function () {
            expect(() => library.calcPriceOfBook(5, 5)).to.be.throw('Invalid input');
            expect(() => library.calcPriceOfBook('a', 'b')).to.be.throw('Invalid input');
            expect(() => library.calcPriceOfBook('a', null)).to.be.throw('Invalid input');
            expect(() => library.calcPriceOfBook(null, null)).to.be.throw('Invalid input');
            expect(() => library.calcPriceOfBook(null, 5)).to.be.throw('Invalid input');
        });

        it("The year is less ot equal 1980", function () {
            expect(library.calcPriceOfBook('abc', 1975)).to.be.equal(`Price of abc is 10.00`);
            expect(library.calcPriceOfBook('abc', 1980)).to.be.equal(`Price of abc is 10.00`);
        });

        it("The year more to 1980", function () {
            expect(library.calcPriceOfBook('abc', 1985)).to.be.equal(`Price of abc is 20.00`);
        });
    });

    describe("test  findBook", function () {
        it("Array with books is empty", function () {
            expect(() => library.findBook([], 'Book1')).to.be.throw('No books currently available');
        });

        it("Found the book", function () {
            expect(library.findBook(['Book1'], 'Book1')).to.be.equal('We found the book you want.');
            expect(library.findBook(['Book1', 'Book2', 'Book3'], 'Book2')).to.be.equal('We found the book you want.');
        });

        it("The book is not in array with books", function () {
            expect(library.findBook(['Book3'], 'Book1')).to.be.equal('The book you are looking for is not here!');
            expect(library.findBook(['Book1', 'Book2', 'Book3'], 'Book4')).to.be.equal('The book you are looking for is not here!');
        });
    });

    describe("test  arrangeTheBooks", function () {
        it("Invalid input", function () {
            expect(() => library.arrangeTheBooks('5')).to.be.throw('Invalid input');
            expect(() => library.arrangeTheBooks(2.5)).to.be.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-5)).to.be.throw('Invalid input');
        });

        it("Books are arranged", function () {
            expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(39)).to.be.equal('Great job, the books are arranged.');
        });

        it("Insufficient space", function () {
            expect(library.arrangeTheBooks(41)).to.be.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});
