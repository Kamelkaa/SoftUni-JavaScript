function processOddPositions(arr) {
    const result = [];

    for (let i = 1; i < arr.length; i += 2) {
        result.unshift(arr[i] * 2);
    }

    console.log(result.join(' '));

    // return arr.filter((a, i) => i % 2 !== 0)
    // .map(x => x * 2)
    // .reverse()
    // .join(' ');
}

processOddPositions([3, 0, 10, 4, 7, 3])