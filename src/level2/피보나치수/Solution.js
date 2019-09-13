function solution(n) {
    const fibonacci = (num) => {
        let result;
        if (num < 2) { return num; }
        result = fibonacci(num-2) + fibonacci(num-1);
        return result % 1234567;
    }
    return fibonacci(n);
}
