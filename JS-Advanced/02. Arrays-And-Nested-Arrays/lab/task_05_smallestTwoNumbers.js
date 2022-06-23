function smallestTwo(arr) {
    arr.sort((a, b) => a - b);
    let result = arr.slice(0, 2);

    return result.join(' ');
}

console.log(smallestTwo([3, 0, 10, 4, 7, 3]));