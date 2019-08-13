'use strict';

function max(numbers) {
    let i = 0;
    let maxNumber = null;
    while(i < numbers.length) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
        i++;
    }
    return maxNumber;
}

function min(numbers) {
    let i = 0;
    let minNumber = numbers[0];
    while(i < numbers.length) {
        if (numbers[i] < minNumber) {
            minNumber = numbers[i];
        }
        i++;
    }
    return minNumber;
}

console.log(min([]));