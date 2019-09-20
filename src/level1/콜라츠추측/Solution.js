function solution(num) {
    let parameterNum = num;
    let collatzCount = 0;
    const isEvenNum = (num) => {
        return num % 2 === 0;
    }
    const isOddNum = (num) => {
        return num % 2 !== 0;
    }
    while (parameterNum !== 1) {
        if (isEvenNum(parameterNum)) {
            parameterNum = parameterNum / 2;
        }
        else if (isOddNum(parameterNum)) {
            parameterNum = parameterNum * 3 + 1;
        }
        if (collatzCount >= 500) {
            return -1;
        }
        collatzCount++;
    }
    return collatzCount;
}
