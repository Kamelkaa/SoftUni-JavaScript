// function largestNumber(numberOne, numberTwo, numberThree) {
//     let result;

//     if (numberOne > numberTwo && numberOne > numberThree) {
//         result = numberOne;
//     } else if (numberTwo > numberOne && numberTwo > numberThree) {
//         result = numberTwo;
//     } else {
//         result = numberThree;
//     }

//     console.log(`The largest number is ${result}.`);
// }

function largestNum(...params) {
console.log(`The largest number is ${Math.max(...params)}.`);
}

largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);