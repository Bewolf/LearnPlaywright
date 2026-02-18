function intersection(array1, array2) {
    let finalArray = []

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                if (!finalArray.includes(array1[i])) {
                    finalArray.push(array1[i])
                }
            }
        }
    }
    console.log("Common value: " + finalArray)
}

let array1 = [99, 12, 34, 32, 2, 66, 74, 45]
let array2 = [1, 12, 78, -1, 2, 66, 43, 66, 12, 12]


intersection(array1, array2)
