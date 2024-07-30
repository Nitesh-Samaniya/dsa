// Move all negative elements to end

const  arr = [1, -1, 3, 2, -7, -5, 11, 6 ];
// Output  [1, 3, 2, 11, 6, -1, -7, -5];

function segregateElements(arr) {
    const pos = [];
    const neg = [];
    let index = 0;

    for(let el of arr){
        if(el >= 0){
            pos.push(el);
        }else{
            neg.push(el);
        }
    }

    for(let el of pos){
        arr[index++] = el;
    }

    for(let el of neg){
        arr[index++] = el;
    }

    return arr;

}

const output = segregateElements(arr);
console.log(output);