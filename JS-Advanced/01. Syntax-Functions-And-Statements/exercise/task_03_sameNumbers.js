function sameNumber(number) {
    const stringNumber = number.toString();
    let sum = parseInt(stringNumber[0]);
    let isSame = true;

    for (let i = 1; i < stringNumber.length; i++) {
        sum += parseInt(stringNumber[i]);

        if (stringNumber[i] != stringNumber[i - 1]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumber(2222222);
sameNumber(1234);