// Given an array arr[] and an integer k where k is smaller than the size of the array, 
// the task is to find the kth smallest element in the given array. It is given that all array 
// elements are distinct.

// Note:-  l and r denotes the starting and ending index of the array.

function kthSmallest(arr,k){
    arr = arr.sort((a,b)=>{return a-b});
    return arr[k-1];
}

const n = 6;
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;

console.log("kth smallest element is: ",kthSmallest(arr, k))