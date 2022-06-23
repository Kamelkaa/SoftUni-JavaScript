function biggestElement(input) {
    let largest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (largest < input[i][j])
                largest = input[i][j];
        }
    }

    return largest;

    // let matrix = arr.map(row => row.split(' ').map(Number)); 
}

console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));