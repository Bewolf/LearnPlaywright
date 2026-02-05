let text = "amazon India"

let targerCharacter = 'a'
let count1 = 0, count2 = 0

for (let i = 0; i <= text.length - 1; i++) {
    if (text[i] === targerCharacter) {
        count1++
    }
}
console.log(`The character ${targerCharacter} is repeating ${count1} times`)

//OR

for (let i = 0; i <= text.length - 1; i++) {
    if (text.charAt(i) === targerCharacter) {
        count2++
    }
}

console.log(`The character ${targerCharacter} is repeating ${count2} times`)