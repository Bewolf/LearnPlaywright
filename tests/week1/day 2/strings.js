let string1 = "Example1";
let string2 = 'Example2';
let string3 = `Example3`;

console.log("string1 is " + string1);
console.log("string2 is " + string2);
console.log("string3 is " + string3);

let course = "Playwright"

console.log("course is " + course);
console.log(`template literal example ${course}`)
console.log(`template literal example ${course.length}`)
console.log(`template literal example ${course.charAt(0)}`)

//Split()
let text = 'This is an example text'
console.log(`After split: ${text.split(' ')}`)

let afterSplit = text.split(' ')
for (let i = 0; i < afterSplit.length; i++) {
    console.log(`Array value: ${afterSplit[i]}`)
}

//case
console.log(`To upper: ${text.toUpperCase()}`);
console.log(`To lower: ${text.toLowerCase()}`);

//substring and slice
//substring accepts only postive value
//slice accepts both +ive and -ive  values
//In slice for -ive index starts from -1 and for +ive index starts from 0
let message = "How to train your dragon"

console.log("SUbstring method 1: " + message.substring(7));
console.log("SUbstring method 2: " + message.substring(7, 11));
//if end index is wrong, it prints the rest of the value
console.log("SUbstring method 2: " + message.substring(7, 110));

console.log("Slice postive: " + message.slice(7));
console.log("Slice negative: " + message.slice(-6));
console.log("Slice negative: " + message.slice(-6, -2));
console.log("Slice negative: " + message.slice(7, 12));
//one postive and one negative wont work. GO both with postive or go both with negative
console.log("Slice negative: " + message.slice(7, 12));

//replace

let a = 'Javascript'

//first occurance
console.log("Replace: " + a.replace('a', 'A'));
console.log("ReplaceAll: " + a.replaceAll('a', 'A'));

