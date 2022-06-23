let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}

console.log(dealership.carEquipment(['sfsgsgd'], [1]));

const { expect } = require('chai');

describe("Dealership", function () {
    describe("Test newCarCost", function () {
        it("when have a discount", function () {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.be.equal(5000);
        });

        it("when have no a discount", function () {
            expect(dealership.newCarCost('Audi A4 B7', 20000)).to.be.equal(20000);
        });
    });

    describe("Test carEquipment", function () {
        it("shoud return array with selected extras", function () {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims'], [0, 2]))
                .to.be.eql(['heated seats', 'sport rims']);
        });

        it("shoud return array with selected extras", function () {
            expect(dealership.carEquipment(['a'], [0])).to.be.eql(['a']);
        });

        it("shoud return array with selected extras", function () {
            expect(dealership.carEquipment([], [0])).to.be.eql([undefined]);
        });
    });

    describe("Test  euroCategory", function () {
        it("shoud give 5% discount", function () {
            expect(dealership.euroCategory(4)).to.be.equal(`We have added 5% discount to the final price: 14250.`)
        });

        it("shoud give 5% discount again", function () {
            expect(dealership.euroCategory(7)).to.be.equal(`We have added 5% discount to the final price: 14250.`)
        });

        it("category is low, no discount", function () {
            expect(dealership.euroCategory(2)).to.be.equal('Your euro category is low, so there is no discount from the final price!')
        });
    });
});
