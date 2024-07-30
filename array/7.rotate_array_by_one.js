// Rotate Array by One
// Given an array arr, rotate the array by one position in clock-wise direction.

const arr = [1, 2, 3, 4, 5];

function rotate(arr) {
    const lastEle = arr.pop();
    arr.unshift(lastEle);
    return arr;
}

console.log(rotate(arr));