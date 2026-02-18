var num;
num = 5;
function factorial(num) {
    if (num < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    var res = 1;
    for (var i = 2; i <= num; i++) {
        res = res * i;
    }
    return res;
}
console.log("Factorial of ".concat(num, " is ").concat(factorial(5)));
console.log("Factorial of ".concat(num, " is ").concat(factorial(1)));
console.log("Factorial of ".concat(num, " is ").concat(factorial(-5)));
