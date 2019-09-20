function solution(arr) {
    const parameterArr = arr;
    let lowestNum = arr[0];
    arr.map((x, i, arr) => {
        if (lowestNum >= arr[i+1] && i < arr.length) {
            lowestNum = arr[i+1];
        }
    })
    const lowestNumIdx = parameterArr.indexOf(lowestNum);
    parameterArr.splice(lowestNumIdx, 1);
    return parameterArr.length === 0 ? [-1] : parameterArr;
}
