"use strict"
/*------------------- TASK 1-----------------------------*/

function factorial(number) {
    if(number < 1){return 1}
    return number*=factorial(--number);
}
/*------------------- TASK 2-----------------------------*/

function direct(begin, end) {

    if (begin <= end) {
        console.log(begin);
        direct(begin + 1, end);
    }

}

function reverse(begin, end) {
    if (begin <= end) {
        console.log(end);
        reverse(begin , end-1);
    }
}

function directArr(begin, end, arr = []) {

    if (begin <= end) {
        arr.push(begin);
        directArr(begin + 1, end, arr);

    }
    return arr;
}

/*------------------- TASK 3-----------------------------*/

function digitReverse (number){
    if (number<10) {
        return number;
    }
    return Number(''+(number%10) + digitReverse(parseInt(number/10)));
}

/*------------------- TASK 4-----------------------------*/

function sumOfDigit (number){
    if (number<10) {
        return number;
    }
    return (number%10) + sumOfDigit(parseInt(number/10));
}

/*------------------- TASK 5-----------------------------*/

function bracketsReturn(digit) {
    if(digit===1)
        return"()";
    return "("+ bracketsReturn(digit-1) +")";
}