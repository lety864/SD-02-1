// Refer to Task 6 in your Instructions to complete this task
const prompt = require("prompt-sync")();

const limit = +prompt("Ingresa hasta que numero quieres generar el FizzBuzz: ");
let listFizzBuzzWoof = [];

for (let i = 1; i <= limit; i++) {
  
  if(i%3 === 0 && i%5 == 0 && i%7 ==0){
    listFizzBuzzWoof.push("FizzBuzzWoof");
  }else if(i%3 === 0 && i%7 == 0){
    listFizzBuzzWoof.push("FizzWoof");
  }else if(i%5 === 0 && i%7 == 0){
    listFizzBuzzWoof.push("BuzzWoof");
  }else if(i%3 === 0 && i%5 == 0){
    listFizzBuzzWoof.push("FizzBuzz");
  }else if(i % 3 === 0){
    listFizzBuzzWoof.push("Fizz");
  }else if(i % 5 === 0){
    listFizzBuzzWoof.push("Buzz");
  }else if(i % 7 === 0){
    listFizzBuzzWoof.push("Woof");
  }else{
    listFizzBuzzWoof.push(i);
  }
};

console.log(listFizzBuzzWoof);
