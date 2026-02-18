
//array can have differnt data types in a single array
//return type will be Object
let data = ["Raj", 35, null, true, 97.9]

//length of array
//.length property is used
console.log("Length of array: " + data.length)

//particular index value. Index starts from 0
console.log("Index of: " + data[2])

/*methods in arrays
 Push
 Pop
 Shift
 unshift*/

//push -->add the element at the end of the array
//pop -->remove the last element of the array
//unshift --> add the element at the beginning of the array
//shift -->remove the first element of the array

data.push("JS")
console.log("After push: " + data)

data.pop()
console.log("After pop: " + data)

data.unshift("Playwright")
console.log("After unshift: " + data)

data.shift()
console.log("After shift: " + data)

//splice --> add/remove element at a specific index
// 3 arguments - starting index, delete count and replacement value

let data1 = ["a", "b", "c", "d", "e"]
//remove
data1.splice(1) // removes all elements from index 1
console.log("After splice remove: " + data1)

let data2 = ["a", "b", "c", "d", "e"]
data2.splice(0, 2)
console.log("After splice remove: " + data2) // removes 2 elements from index 0

let data3 = ["a", "b", "c", "d", "e"]
data3.splice(1, 2, "Z") // removes 2 elements from index 1. Replaces removed element b & c with Z
console.log("After splice remove: " + data3)

let data4 = ["a", "b", "c", "d", "e"]
data4.splice(1, 2, "Z", "X", "AB") // removes 2 elements from index 1. Replaces removed element b & c with Z, X and AB
console.log("After splice remove4: " + data4)







//add
//data.splice()


//sort
let array = [78, 23, 45, "Raj", 'Aravind', true]

//ascending order
array.sort();
console.log("After sort: " + array)

//to get decensing order, sort() first then use reverse()
//or we can use a for loop
array.reverse()
console.log("After reverse: " + array)

