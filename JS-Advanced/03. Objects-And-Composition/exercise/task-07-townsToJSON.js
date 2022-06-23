function task07(arr) {
    let result = [];

    let colums = arr[0].split('|').filter(x => x).map(x => x.trim());
    const town = colums[0];
    const latitude = colums[1];
    const longitude = colums[2];

    for (let i = 1; i < arr.length; i++) {
        let tokens = arr[i].split('|').filter(x => x).map(x => x.trim());
        let obj = {};

        obj[town] = tokens[0];
        obj[latitude] = Number(Number(tokens[1]).toFixed(2));
        obj[longitude] = Number(Number(tokens[2]).toFixed(2));

        result.push(obj);
    }

    return JSON.stringify(result);
}

console.log(task07(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));