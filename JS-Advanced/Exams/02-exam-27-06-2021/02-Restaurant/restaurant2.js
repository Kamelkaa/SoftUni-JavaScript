class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach((p) => {
            let [productName, productQuantity, productTotalPrice] = p.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.history.join("\n");
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                neededProducts: {},
                price
            }

            neededProducts.forEach((p) => {
                let [productName, productQuantity] = p.split(' ');
                this.menu[meal].neededProducts[productName] = productQuantity;
            });

            const countMeal = Object.keys(this.menu).length;
            if (countMeal == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${countMeal} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later...";
        } else {
            let result = [];

            for (let meal in this.menu) {
                result.push(`${meal} - $ ${this.menu[meal].price}`);
            }

            return result.join('\n');
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            const allNeededProducts = {};

            for (let product in this.menu[meal].neededProducts) {
                if (!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].neededProducts[product]) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                } else {
                    allNeededProducts[product] = this.menu[meal].neededProducts[product];
                }
            }

            for (let needProd in allNeededProducts) {
                this.stockProducts[needProd] = allNeededProducts[needProd];
            }

            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));


