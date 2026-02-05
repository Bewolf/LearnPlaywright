let number = 0
determinNumber(number)

function determinNumber(value) {
    if (value > 0) {
        console.log(value + " is a positive number");
    } else if (value === 0) {
        console.log(value + " is Zero");
    } else {
        console.log(value + " is a negative number");
    }
}