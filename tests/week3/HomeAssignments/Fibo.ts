function fibonacci(n: number): number {

    if (n < 0) {
        throw new Error("Fibonacci is not defined for negative numbers.");
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev: number = 0;
    let curr: number = 1;
    let next: number = 0;

    for (let i = 2; i <= n; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
console.log("Fibonacci(0):", fibonacci(0));
console.log("Fibonacci(1):", fibonacci(1));
console.log("Fibonacci(5):", fibonacci(5));
console.log("Fibonacci(10):", fibonacci(10))