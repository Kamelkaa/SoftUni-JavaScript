function aggregateElem(arr) {
    // let sum = 0;
    // let inverseValesSum = 0;
    // let stringRepresentation = '';

    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     inverseValesSum += 1 / arr[i];
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     stringRepresentation += arr[i];
    // }

    // console.log(sum);
    // console.log(inverseValesSum);
    // console.log(stringRepresentation);

    function aggregate(array, initVal, func) {
        let validation = initVal;

        for (let i = 0; i < array.length; i++) {
            validation = func(validation, array[i]);
        }

        console.log(validation);
    }

    aggregate(arr, 0, (a, b) => a + b);
    aggregate(arr, 0, (a, b) => a + 1 / b);
    aggregate(arr, '', (a, b) => a + b);
}

aggregateElem([1, 2, 3]);
aggregateElem([2, 4, 8, 16]);