function sumOfNumbers(num1, num2) {
    let numberOne = Number(num1);
    let numberTwo = Number(num2);
    let result = 0;

    for (let i = numberOne; i <= numberTwo; i++) {
        result += i;
    }

    return result;
}

console.log(sumOfNumbers('1', '5'));
console.log(sumOfNumbers('-8', '20'));