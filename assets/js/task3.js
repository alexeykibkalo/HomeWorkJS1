"use strict"

function createArray() {
    const result = [];
    for(let i = 0; i < 5; i++)
    {
        result.push(Math.floor(Math.random() * Math.floor(10)));
    }
    return result;
}

const arr1 = createArray();
const arr2 = createArray();

// ----------------------TASK 1----------------------------------

function returnResultArray(arr1, arr2) {
    const temp = {};
    const result = [];
    convertArraytoObject(arr1, temp);
    convertArraytoObject(arr2, temp);
    for (let i in temp){
        result.push(Number(i));
    }
    return result;
}
function convertArraytoObject(arr, tempObj) {
    for (let value of arr){
        tempObj[value] = 0;
    }
}

// ----------------------TASK 2----------------------------------

function returnResultArray_2(arr1, arr2) {
    const temp = {};
    const result = [];

    for (let value of arr1) {
        if (temp[value]) {
            continue;
        } else {
            temp[value] = 1;
        }
    }

    for (let value of arr2) {
        if (temp[value]) {
            temp[value]++;
        }
    }

    for (let i in temp){
        if(temp[i]>1){
            result.push(Number(i));
        }
    }
    return result;
}

// ----------------------TASK 3----------------------------------

function returnResultArray_3(arr1, arr2) {
    const temp = {};
    const result = [];

    for (let value of arr1) {
        if (temp[value]) {
            continue;
        } else {
            temp[value] = 1;
        }
    }

    for (let value of arr2) {
        if (temp[value]) {
            temp[value]++;
        }
    }

    for (let i in temp){
        if(temp[i] === 1){
            result.push(Number(i));
        }
    }
    return result;
}
