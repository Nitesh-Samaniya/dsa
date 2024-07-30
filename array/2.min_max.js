// Given an array arr. Your task is to find the minimum and maximum elements in the array.

function getMinMax(arr) {
    if(arr.length === 0){
        return [];
    }
    
    let minEle = arr[0];
    let maxEle = arr[0];
    
    for(let el of arr){
        if(el < minEle){
            minEle = el;
        }else if(el > maxEle){
            maxEle = el;
        }
    }
    
    return [minEle, maxEle]
}

console.log(getMinMax([3, 2, 1, 56, 10000, 167]))