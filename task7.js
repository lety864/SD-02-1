// Refer to Task 7 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const limit = +prompt("Ingresa hasta que numero quieres generar el FizzBuzz: ");
let listFizzBuzzWoof = [];

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "FizzBuzz",
    "FizzWoof",
    "BuzzWoof",
    "FizzBuzzWoof",
    "Bark",
    "Awoo",
    "Bang"
  ];
  
const findPrimos = (primo) =>{
  for(let i=2; i<primo; i++){
    if(primo%i === 0){
      return false;
    }
  }
  return primo !== 1;
}

for (let i = 1; i <= limit; i++) {
  
  if(i%3 === 0 && i%5 == 0 && i%7 ==0){
    listFizzBuzzWoof.push(buzzWords[6]);
  }else if(i%3 === 0 && i%7 == 0){
    listFizzBuzzWoof.push(buzzWords[4]);
  }else if(i%5 === 0 && i%7 == 0){
    listFizzBuzzWoof.push(buzzWords[5]);
  }else if(i%3 === 0 && i%5 == 0){
    listFizzBuzzWoof.push(buzzWords[3]);
  }else if(i % 3 === 0){
    listFizzBuzzWoof.push(buzzWords[0]);
  }else if(i % 5 === 0){
    listFizzBuzzWoof.push(buzzWords[1]);
  }else if(i % 7 === 0){
    listFizzBuzzWoof.push(buzzWords[2]);
  }else if(findPrimos(i) == true && i<30){
    listFizzBuzzWoof.push(buzzWords[7]);
  }else if(findPrimos(i) == true && i>30 && i<50){
    listFizzBuzzWoof.push(buzzWords[8]);
  }else if(findPrimos(i) == true && i>50){
    listFizzBuzzWoof.push(buzzWords[9]);
  }else{
    listFizzBuzzWoof.push(i);
  }
};

console.table(listFizzBuzzWoof);