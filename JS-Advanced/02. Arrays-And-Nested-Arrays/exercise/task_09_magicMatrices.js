function magicMatrices(arr) {
    let sum = arr[0].reduce((a, b) => a + b, 0);
    let isMagic = true;

    for (let i = 0; i < arr.length; i++) {
        let sumRow = arr[i].reduce((a, b) => a + b, 0);
        let sumCol = arr.map(row => row[i]).reduce((a, b) => a + b, 0);

        if (sumRow !== sum || sumCol !== sum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);

    // let equal = true;
    // let initialSum = 0;

    // for (let i = 0; i < matrix.length; i++) {
    //     initialSum += matrix[0][i];
    // }
 
    // for (let row = 0; row < matrix.length; row++) {
    //     let currentRow = 0;
    //     let currentCol = 0;
    //     for (let col = 0; col < matrix.length; col++) {
    //         currentRow += matrix[row][col];
    //         currentCol += matrix[col][row];
    //     }
        
    //     if (currentRow != initialSum || currentCol != initialSum) {
    //         equal = false;
    //         break;
    //     }
    // }
 
    // return equal;
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);