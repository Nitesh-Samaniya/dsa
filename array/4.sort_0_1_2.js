// Sort 0s, 1s and 2s

const N = 5;
const arr = [0, 2, 1, 2, 0];

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort012(arr, N){
    let low = 0;
        let mid = 0;
        let high = N-1;
        
        function swap(arr, i, j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
        while(mid <= high){
            if(arr[mid] === 0){
                swap(arr, low, mid);
                low++;
                mid++;
            }else if(arr[mid] === 1){
                mid++;
            }else{
                swap(arr, mid, high);
                high--;
            }
        }
        
        return arr;
}

console.log(sort012(arr, N));