"use strict"

function createArray() {
   const result = [];
    for(let i = 0; i < 10; i++)
    {
        result.push(Math.floor(Math.random() * Math.floor(10)));
    }
    return result;
}

const arr = createArray();

// ----------------------TASK 1----------------------------------

function showArray(arr) {
    for(let i of arr){
        console.log(i);
    }
}

// ----------------------TASK 2----------------------------------

function showEvenElementsOfArray(arr) {
    for(let i of arr){
        if(i%2 === 0)
            console.log(i);
    }
}

// ----------------------TASK 3----------------------------------

function sumOfElementsOfArray(arr) {
    let result = 0;
    for(let i of arr){
        result+=i;
    }
    return result;
}

// ----------------------TASK 4----------------------------------

function maxElementOfArray(arr) {
    let result = 0;
    for(let i of arr){
        if(result < i){
            result = i;
        };
    }
    return result;
}

// ----------------------TASK 5----------------------------------

function addElementToArray(arr, index, value) {
    if(index > arr.length || index < 0){return alert("Invalid index!")};
    for(let i = arr.length - 1; i > index; i--){
         arr[i + 1] = arr[i];
    };
    arr[index] = value;
}

// ----------------------TASK 6----------------------------------

function deleteElementFromArray(arr, index) {
    if(index > arr.length || index < 0){return alert("Invalid index!")};
    delete arr[index];
    for(let i = index; i < arr.length; i++){
        arr[i] = arr[i+1];
    };
}

