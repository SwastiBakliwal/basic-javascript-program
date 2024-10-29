//js is dynamically types language

//primitive 

//7 types : string , number , boolean , null , undefined , symbol , bigInt

const score = 100
const scorevalue = 100.3
const isloggedin = false
const outsideTemp = null  //datatype id object 
let userEmail ; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123')

console.log(id === anotherId)  //false

const bignumber = 345678902124342325n  //bigInt use 

//Reference type also known as non primitive 

// array , objects , functions
 
const fruits = ["peaches" , "cherries" , "pears" , "blueberry"];
let myobj = {
    name: "swasti" ,
    age: 20 
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof bignumber)  //bigint