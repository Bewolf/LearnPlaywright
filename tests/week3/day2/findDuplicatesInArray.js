//classroom 1
let array = [13, 39, 50, 12, 99, 34, 56, 99, 34, 56, 43, 78, 12, 10, 50]

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            console.log(array[i] + " is a duplicate")
        }
    }
}

//classroom 2
/*data["chrome", true, 132.8]
add index 5 -> webkit
data[5] = "webkit"
pop ->
    use push -> firefox
use shift ->
    use for..of to print value*/

let data = ["chrome", true, 132.8]
data[5] = 'Webkit'
console.log("Array: " + data)
data.pop()
console.log("After pop: " + data)
data.push("firefox")
console.log("After push: " + data)
data.shift()
console.log("After shift: " + data)

for (let i = 0; i < data.length; i++) {
    console.log(data[i])
}