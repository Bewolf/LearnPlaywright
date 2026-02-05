function findLastWordsLength(text) {
    let aftersplit = text.trim().split(" ")

    for (let i = 0; i < aftersplit.length; i++) {
        if (i === aftersplit.length - 1) {
            console.log(`The text '${aftersplit[i]}' contains ${aftersplit[i].length} characters`)
        }
    }
}

//Example 1
findLastWordsLength("Hello World")
let s = "asd";

//Example 2:
findLastWordsLength(" fly me to the moon ")

//Example 3:

isAnagram("Listen", "Silent")

function isAnagram(text1, text2) {
    let customText1 = text1.toLowerCase().split('').sort().join('');
    let customText2 = text2.toLowerCase().split('').sort().join('');
    console.log("Custom text 1: " + customText1);
    console.log("Custom text 2: " + customText2);
    if (customText1 === customText2) {
        console.log("Yes it is an Anagram")
    } else {
        console.log("No it is not an Anagram")
    }
}

