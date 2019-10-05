function solution(n, m) {
    let largeNum;
    let smallNum;
    let gcd;
    let lcm;
    let remainder;
    
    if (n > m) {
        largeNum = n;
        smallNum = m;
    }
    else {
        largeNum = m;
        smallNum = n;   
    }
    
    while (remainder !== 0) {
        remainder = largeNum % smallNum;
        if (remainder === 0) {
            gcd = smallNum;
        }
        if (remainder > smallNum) {
            largeNum = remainder;
        }
        else {
            largeNum = smallNum;
            smallNum = remainder;
        }
    }
    
    lcm = n * m / gcd;
    return [gcd, lcm];
}
