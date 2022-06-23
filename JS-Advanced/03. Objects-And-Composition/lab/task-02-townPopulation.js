function task02(arr) {
    const result = {};

    for (let tokens of arr) {
        let [name, population] = tokens.split(' <-> ');
        population = Number(population);

        if (result[name] != undefined) {
            population += result[name];
        }

        result[name] = population;
    }

    for (let town in result) {
        console.log(`${town} : ${result[town]}`)
    }
}

task02(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

task02(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);