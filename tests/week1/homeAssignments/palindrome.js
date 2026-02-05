
/**
 * @param {String} text 
 */
function isPalindrome(text) {

    customText = text.toLowerCase().split('').reverse().join('')
    console.log("customText: " + customText)
    if (text.toLowerCase() === customText) {
        console.log("Yes it is Palindrome")
    } else {
        console.log("No it is not a Palindrome")
    }

}

isPalindrome("Madam")