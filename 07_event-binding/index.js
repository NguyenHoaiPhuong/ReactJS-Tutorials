// Bind an object to a function
// Reference it using this

console.log("First print")
console.log(this)

function hello() {
    console.log(this.name)
}

console.log("Second print")
hello()

// Object akagi
let akagi = {
    name: "Akagi"
}

let helloAkagi = hello.bind(akagi)
console.log("Third print")
helloAkagi()

// Object yushin
let yushin = {
    name: "Yushin"
}

let helloYushin = hello.bind(yushin)
console.log("Forth print")
helloYushin()
