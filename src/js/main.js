

const display = (msg) => console.log(msg)

display("App is ready for es6")

const a = {
    test : "a"
}

const b = {
    ...a,
    name: 'toto'
}

console.log(b)

console.log('toto')