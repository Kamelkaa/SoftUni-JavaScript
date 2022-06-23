function fruit(type, weight, price) {
    let weightInKg = weight / 1000;
    let neededMoney = price * weightInKg;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);