function solution(arr) {
    const parameterArr = arr;
    let lowestNum = arr[0];
    let lowestNumIdx;
    arr.map((x, i, arr) => {
        if (lowestNum >= arr[i+1] && i < arr.length) {
            lowestNum = arr[i+1];
            lowestNumIdx = i+1;
        }
    })
    parameterArr.splice(lowestNumIdx, 1);
    return parameterArr.length === 0 ? [-1] : parameterArr;
}
