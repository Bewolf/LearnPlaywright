var name = "Aravind"
let data = "playwright"
const batch = 2026

console.log("var value1: " + name)
console.log("let value1: " + data)
console.log("const value1: " + batch)

name = "raj"
data = "Playwright advanced"
//batch = 2027 --> not allowed

console.log("var value2: " + name)
console.log("let value2: " + data)
console.log("const value2: " + batch)

{
    var name = "John"
    let data = "Playwright advanced + Project"
    //batch = 2028 not allowed
    const batch = 2028

    console.log("var value3: " + name)
    console.log("let value3: " + data)
    console.log("const value3: " + batch)
}

console.log("var value4: " + name)
console.log("let value4: " + data)
console.log("const value4: " + batch)