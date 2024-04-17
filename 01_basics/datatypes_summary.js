// Primitive Data Types (Call by Value) We get a copy
// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt
const name = 'Nouman'
const number = 123
const isLoggedIn = false
const outsideTemp = null
let city;

let id=Symbol('123')
let anotherId=Symbol('123')
console.log(id === anotherId)

const bigNumber = 1234347832587825n
console.table([typeof name, typeof number, typeof isLoggedIn, typeof outsideTemp, typeof city, typeof id, typeof bigNumber])
// Non Primitive Data Types (Reference) 
// Array, Objects, Functions

const days = ['Monday', 'Tuesday', 'Wednesday']

let myObj = {
    name: 'Nouman',
    age: 25
}

const myFunction = function() {
    console.log('Hello World!')
}

console.table([typeof days, typeof myObj, typeof myFunction])
// Is Javascrript Dynamically typed language?