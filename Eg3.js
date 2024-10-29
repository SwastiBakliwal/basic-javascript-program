//arrow functions a concise way to write  anonymous functions.
// let a = 12;
// let b =35;
// let sub = (a,b) => a-b;
// console.log(sub());//ans NaN
//Array Methods

let arr = ["the","code"];
arr.push("crumbs");
console.log(arr);  //[ 'the', 'code', 'crumbs' ]
arr.slice(1,2);   //  [ 'the', 'code', 'crumbs' ]
console.log(arr);
arr.toString();
console.log(arr); //[ 'the', 'code', 'crumbs' ]
arr.shift();
console.log(arr);      //[ 'code', 'crumbs' ]
arr.pop();
console.log(arr); //[ 'code' ]
arr.filter(word => word.length > 3);
console.log(arr);  //[ 'code' ]
arr.includes("code");
console.log(arr); //[ 'code' ]


let list = [1,4,9,16];
list.map(x => x * 2);
console.log(list);