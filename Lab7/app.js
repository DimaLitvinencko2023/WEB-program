function First(num) {
    if (typeof (num) !== 'number') {
        return '';
    }
    if (num % 2 === 0) {
        return 'Парне число';
    }
    else {
        return 'Не парне число';
    }
}
function Second() {
    let simpleNumber = [];
    let num = 1;

    for (let i = 0; i < 5; num++) {
        let numIsSimple = true;

        if (num <= 1)
            numIsSimple = false;
        else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    numIsSimple = false;
                }
            }
        }

        if (numIsSimple) {
            simpleNumber[i] = num;
            i++;
        }
    }
    return SumArray(simpleNumber);
}
function SumArray(inputArray) {
    let sum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }

    return sum;
}
function Third(n) {
    let array = [];
    let value = 1;

    for (let i = 1; i <= n; i++) {
        array[i - 1] = value;
        value += 10 ** i;
    }

    return SumArray(array);
}

console.log("Результат першої функції при передачі строки: " + First("string"));
console.log("Результат першої функції при передачі числа 10: " + First(10));

console.log("Результат другої функції - сума перших 5 простих чисел: " + Second());

console.log("Результат третьої функції при передачі числа 5: " + Third(5));
console.log("Результат третьої функції при передачі числа 10: " + Third(10));

// щоб консоль автоматично не зачинялась у Visual Studio:
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);