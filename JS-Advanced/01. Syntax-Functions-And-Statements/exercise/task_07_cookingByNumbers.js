function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    let number = Number(num);
    let arr = [op1, op2, op3, op4, op5];
    let result = number;

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "chop":
                result /= 2;
                break;
            case "dice":
                result = Math.sqrt(result);
                break;
            case "spice":
                result += 1;
                break;
            case "bake":
                result *= 3;
                break;
            case "fillet":
                result *= 0.8;
                break;
        }

        console.log(result);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');