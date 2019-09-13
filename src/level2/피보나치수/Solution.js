function solution(n) {
    let result;
    const fibonacci = (num) => {
        if (num < 2) { return num; }
        result = fibonacci(num-2) + fibonacci(num-1);
        return result % 1234567;
    }
    return fibonacci(n);
}
