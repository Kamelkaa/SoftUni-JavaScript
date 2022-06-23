function extractIncreasingSubsequence(arr) {
    const result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    arr.reduce((accumulated, current) => {
        if (current >= biggest) {
            biggest = current;
            accumulated.push(current);
        }

        return accumulated;
    }, result);

    return result;
}

console.log(extractIncreasingSubsequence([20, 
    3, 
    2, 
    15,
    6, 
    1]));