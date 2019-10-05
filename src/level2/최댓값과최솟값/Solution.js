function solution(str) {
    let minimumValue;
    let maximumValue;
    const isMinimumValue = (minimumValue, num) => {
        return minimumValue/1 >= num/1;
    }
    const isMaximumValue = (maximumValue, num) => {
        return maximumValue/1 <= num/1;
    }
    str.split(" ").map((val, i) => {
        if (i === 0) {
            minimumValue = val;
            maximumValue = val;
        }
        if (isMinimumValue(minimumValue, val)) {
            minimumValue = val;
        }
        else if (isMaximumValue(maximumValue, val)) {
            maximumValue = val;
        }
    });
    return [minimumValue, maximumValue].join(' ');
}
