function task06(arr) {
    let catalogue = {};

    for (let element of arr) {
        let [productName, price] = element.split(' : ');
        price = Number(price);
        let letter = productName[0];

        if (!catalogue[letter]) {
            catalogue[letter] = {};
        }

        catalogue[letter][productName] = price;
    }

    let letterSort = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (let key of letterSort) {
        let products = Object.entries(catalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`)
        });
    }
}

task06(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);