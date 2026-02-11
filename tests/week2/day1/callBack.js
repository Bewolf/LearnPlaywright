
function a(text, callback) {
    console.log("OP: " + text)
    callback();
}

function b() {
    console.log("Inside function b")
}

a("VALUE", b);