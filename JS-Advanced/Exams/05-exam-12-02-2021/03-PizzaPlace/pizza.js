let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}


const { expect } = require('chai');

describe("Pizz place", function () {
    describe("test makeAnOrder", function () {
        it("should throw when no ordered pizza", function () {
            expect(() => pizzUni.makeAnOrder({})).to.throw('You must order at least 1 Pizza to finish the order.');
        });

        it("order only pizza", function () {
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Peperoni' }))
            .to.be.equal('You just ordered Peperoni');
        });

        it("order pizza and drink", function () {
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Peperoni', orderedDrink: 'woter' }))
            .to.be.equal('You just ordered Peperoni and woter.')
        });
    });

    describe("test getRemainingWork", function () {
        it("TODO …", function () {
            // TODO: …
        });
    });

    describe("test orderType", function () {
        it("TODO …", function () {
            // TODO: …
        });
    });
});
