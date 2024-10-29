let num = 5;
let str = "5";

console.log(num + str); // Output: "55" (number is coerced to string)
console.log(num * str); // Output: 25 (string is coerced to number)
console.log(num == str); // Output: true (loose equality with type coercion)
console.log(num === str); // Output: false (strict equality without type coercion)

let isAdult = true;
let hasPermission = false;

console.log(isAdult && hasPermission); // Logical AND: false
console.log(isAdult || hasPermission); // Logical OR: true
console.log(!isAdult);                 // Logical NOT: false
