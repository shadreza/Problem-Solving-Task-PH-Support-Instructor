function rotateLeft (n, d, arr) {
    let startingIndex = d%n;
    let newArr = [];
    for(let i=startingIndex; i<n; i++) {
        newArr.push(arr[i]);
    }
    for(let i=0; i<startingIndex; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const res = rotateLeft(2, 1, [1, 2]);
console.log(res);