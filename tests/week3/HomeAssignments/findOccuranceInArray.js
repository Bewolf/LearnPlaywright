const nums = [2, 4, 5, 2, 1, 2];
let count = 0
let counter = 0
let k = 2

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {
        count++
    }
}

console.log(`Occurrence of ${k} is: ${count}`);

function occurance(array, value) {
    for (let num of nums) {
        if (num === k) {
            counter++
        }
    }
    return counter
}

console.log(`Occurrence of ${k} is: ${occurance(nums, k)}`);