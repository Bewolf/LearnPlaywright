let text = "Amazon India"
let reversedText = ""
for (i = text.length - 1; i >= 0; i--) {
    reversedText = reversedText + text[i]
}

console.log("Reversed text: " + reversedText);

// Simple alternate way
console.log("Reversed text: " + text.split('').reverse());

//Use join to print in a single word
console.log("Reversed text using join: " + text.split('').reverse().join(''));

//To print in a single word and with separator using Join
console.log("Reversed text: " + text.split('').reverse().join('|'));