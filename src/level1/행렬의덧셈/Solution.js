function solution(arr1, arr2) {
    return arr1.map((x, row) => x.map((x, column) => x + arr2[row][column]));
}
