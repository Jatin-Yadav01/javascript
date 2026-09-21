let score = "100"

// console.log(typeof score)
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

//"100"=>100
//"100abc"=>NaN
//true=>1 false=>0

let isLoggedIn = "0"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//""=>false "1"=>true "0"=>true(because it is non empty string)

let someNumber = 123
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber);

// *********************Operations********************

let value=4;
let negValue=-value;
console.log(negValue)

let str1="Jatin"
let str2=" Yadav"
let str3=str1+str2
console.log(str3);

console.log("1"+2)     //12
console.log("1"+2+2)   //122 (bcz string + num=string)
console.log(1+2+"2")   //32  (num+num=num then string)
