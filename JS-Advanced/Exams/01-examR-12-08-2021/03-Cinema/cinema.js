const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
            firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

const { expect } = require('chai');

describe('Test Cinema', () => {
    describe('Test showMovies functionality', () => {
        it('return movies as expected', () => {
            expect(cinema.showMovies(['King Kong', 'Hobbit'])).to.equal('King Kong, Hobbit');
            expect(cinema.showMovies(['King Kong'])).to.equal('King Kong');
        });

        it('return message if length of array is zero', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
            expect(cinema.showMovies('')).to.equal('There are currently no movies to show.');
        });
    });

    describe('Test ticketPrice functionality', () => {
        it('return price according to correct type', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });

        it('returns an error if type is incorrect', () => {
            expect(cinema.ticketPrice.bind(('incorrect'))).to.throw('Invalid projection type.');
            expect(cinema.ticketPrice.bind((''))).to.throw('Invalid projection type.');
            expect(cinema.ticketPrice.bind((33))).to.throw('Invalid projection type.');
        });
    });

    describe('Test swapSeatsInHall functionality', () => {
        it('returns message if successful swap', () => {
            expect(cinema.swapSeatsInHall(2, 4)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
        });

        it('returns message if unsuccessful swap', () => {
            expect(cinema.swapSeatsInHall(-1, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(22, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
});
// describe("Cinema", function () {
//     describe("Test showMovies function", function () {
//         it("Array length is zero", function () {
//             expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
//         });

//         it("Array with movies", function () {
//             expect(cinema.showMovies(['King Kong', 'Joker'])).to.be.equal('King Kong, Joker');
//         });
//     });

//     describe("Test ticketPrice function", function () {
//         it("projectionType present with type Premiere", function () {
//             expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
//         });

//         it("projectionType present with type Normal", function () {
//             expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
//         });

//         it("projectionType present with type Discount", function () {
//             expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
//         });

//         it("projectionType is not present and function shuld trow", function () {
//             expect(() => cinema.ticketPrice('TestInvalidInput')).to.be.Throw('Invalid projection type.');
//         });
//     });

//     describe("Test swapSeatsInHall function", function () {
//         it("First place is not Intiger is with floating point", function () {
//             expect(cinema.swapSeatsInHall(1.25, 10)).to.be.equal('Unsuccessful change of seats in the hall.');//
//         });

//         it("First place is less then zero", function () {
//             expect(cinema.swapSeatsInHall(-1, 10)).to.be.equal('Unsuccessful change of seats in the hall.');//
//         });

//         it("First place is equal of zero", function () {
//             expect(cinema.swapSeatsInHall(0, 10)).to.be.equal('Unsuccessful change of seats in the hall.');//
//         });

//         it("First place is greater then 20", function () {
//             expect(cinema.swapSeatsInHall(25, 10)).to.be.equal('Unsuccessful change of seats in the hall.');//
//         });

//         it("Second place is not Intiger is with floating point", function () {
//             expect(cinema.swapSeatsInHall(10, 1.2)).to.be.equal('Unsuccessful change of seats in the hall.');
//         });

//         it("Second place is less then zero", function () {
//             expect(cinema.swapSeatsInHall(10, -1)).to.be.equal('Unsuccessful change of seats in the hall.');
//         });

//         it("Second place is equal of zero", function () {
//             expect(cinema.swapSeatsInHall(10, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
//         });

//         it("Second place is greater then 20", function () {
//             expect(cinema.swapSeatsInHall(10, 25)).to.be.equal('Unsuccessful change of seats in the hall.');
//         });

//         it("First place is equal of second place", function () {
//             expect(cinema.swapSeatsInHall(10, 10)).to.be.equal('Unsuccessful change of seats in the hall.');//
//         });

//         it("One of input is not exist", function () {
//             expect(cinema.swapSeatsInHall(10)).to.be.equal('Unsuccessful change of seats in the hall.'); //
//         });

//         it("First place and second place are correct", function () {
//             expect(cinema.swapSeatsInHall(10, 15)).to.be.equal('Successful change of seats in the hall.');//
//         });

//         it("1 and 2 numbers given", function() {
//             expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");//!!!!!!!!!!!
//         });
//     });
// });

