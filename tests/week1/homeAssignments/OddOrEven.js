
function isOddOrEven(value) {
    if (value % 2 == 0) {
        console.log("The number " + value + " is Even")
    } else {
        console.log("The number " + value + " is Odd")
    }

    let result = value % 2
    switch (result) {
        case 0:
            console.log("The number " + value + " is Even!")
            break;

        default:
            console.log("The number " + value + " is Odd!")
            break;
    }
}


let number = 3
isOddOrEven(number)