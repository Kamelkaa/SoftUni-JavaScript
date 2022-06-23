function task05(arr) {
    let cataloge = {};

    for (let element of arr) {
        let [town, product, price] = element.split(' | ');
        price = Number(price);

        if (!cataloge[product]) {
            cataloge[product] = {};
        }

        cataloge[product][town] = price;
    }

    for (let prod in cataloge) {
        let sorted = Object.entries(cataloge[prod]).sort((a, b) => a[1] - b[1]);
       
        console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}

task05(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);