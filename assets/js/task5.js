"use strict"
// ----------------------TASK 1----------------------------------
function compareStrings(string1, string2) {
    if(string1.toString().length === string2.toString().length){
        return 0;
    }
    else{
        return(string1.toString().length > string2.toString().length ? 1 : -1);
    }

}

// ----------------------TASK 2----------------------------------

function firsLetterToUpper(string) {
    let result = string[0].toUpperCase();
    result+=string.slice(1);
    return result;
}

// ----------------------TASK 3----------------------------------

function letterCount(string) {
    let count = 0;
    for(let i of string){
        if(i.toLowerCase()=== "a" || i.toLowerCase()=== "e" || i.toLowerCase()=== "i" || i.toLowerCase()=== "o" || i.toLowerCase()=== "u" ){
            count++;
        }
    }
    return count;

}

// ----------------------TASK 4----------------------------------

const reg = new RegExp("100% бесплатно|увеличение продаж|только сегодня|не удаляйте|ххх", "i");

function spamTest(string, regExp) {
    return(string.search(regExp) !== -1 ? true : false);
}

// ----------------------TASK 5----------------------------------

function trimString(str, length) {
    if(str.length<= length){
        return str;
    }
    else{
        return str.substr(0, length)+ "...";
    }
}

// ----------------------TASK 6----------------------------------

function isStringPolindrom(string){
    if(string === string.split("").reverse().join("")){
        return true
    }
    return  false;

}

// ----------------------TASK 7----------------------------------

function wordsCount(string) {
    return string.split(" ").length;
}

// ----------------------TASK 8----------------------------------

function findLongestWord(string){
    let temp = string.split(" ");
    let result = "";
    for(let i of temp){
        if(result.length < i.length){
            result = i;
        }
    }
    return result;
}

// ----------------------TASK 9----------------------------------
function calcAverageWordLength(string) {
    let temp = string.split(" ");
    let result = 0 ;
    for(let i of temp){
        result+=i.length;
    }
    return Math.round(result/temp.length);
}

// ----------------------TASK 10----------------------------------
// Функция вернет массив с индексами заданного символа. Количесто совпадений будет равно длине массива
function findIndexOfSymbol(string, symbol) {
    let reg = new RegExp(symbol, "g");
    let temp = Array.from(string.matchAll(reg));
    const result = [];
    for(let i of temp){
       result.push(i.index);
    }
    return result;
}