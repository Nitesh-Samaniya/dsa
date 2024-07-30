// Given two arrays arr1[] and arr2[], the task is to find the number of elements 
// in the union between these two arrays.

// arr1[] = [1, 2, 3, 4, 5], arr2[] = [1, 2, 3]
// Output: 5

function doUnion(arr1, arr2){
    const union = new Set(arr1, arr2);
    console.log(union, union.size);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3];

doUnion(arr1,arr2);