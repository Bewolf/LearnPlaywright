let num: number
num = 5

function factorial(num: number): number {
    if (num < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }

    let res: number = 1
    for (let i = 2; i <= num; i++) {
        res = res * i;
    }

    return res
}

console.log(`Factorial of ${num} is ${factorial(5)}`)
console.log(`Factorial of ${num} is ${factorial(1)}`)
console.log(`Factorial of ${num} is ${factorial(-5)}`)