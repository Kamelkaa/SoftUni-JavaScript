function evenPositions(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}

evenPositions(['20', '30', '40', '50', '60']);
evenPositions(['5', '10']);