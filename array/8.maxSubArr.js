// Given an integer array arr[]. Find the contiguous sub-array(containing at least one number) 
// that has the maximum sum and return its sum.

// Examples:

// Input: arr[] = [1, 2, 3, -2, 5]
// Output: 9
// Explanation: Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.

function maxSubarraySum(arr) {
    let max = arr[0];
    let N = arr.length;
    let end = 0;
    
    for(let i=0 ; i<N ; i++){
        end = end + arr[i];
        if(max < end)
            max = end;
        if(end < 0)
            end = 0;
    }
    return max;
}

console.log(maxSubarraySum([1, 2, 3, -2, 5]))
console.log(maxSubarraySum([-1, -2, -3, -4]))
console.log(maxSubarraySum([5, 4, 7]))