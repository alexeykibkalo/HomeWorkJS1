"use strict"
const fructs = ["lemon", "apple", "kiwi", "quince", "pineapple"];
fructs.sort();

// ----------------------TASK 1----------------------------------

function showFructs(array) {
    document.write("<ul>"+ printElementOfArray(array) +"</ul>");
}
function printElementOfArray(arr) {
    let result = "";
    for(let i of arr){
        result+="<li>"+i+"</li>";
    }
    return result;
}

// ----------------------TASK 2----------------------------------

function  findeFruct(fruct, arrOfFructs) {
    fruct = fruct.toLowerCase();
    for(let i = 0; i < arrOfFructs.length; i++ ){
        if (arrOfFructs[i] === fruct)
            return i;
    }
    return -1;
}