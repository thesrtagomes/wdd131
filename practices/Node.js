// Atividade 1: calculando a multiplicação de dois números utilizando um input do usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function square(number) {
    return number * number;
  }
  
  readline.question('What is the number? ', number => {
    number = Number(number);
    console.log(`The square of ${number} is ${square(number)}`);
    readline.close();
  });


// Atividade 2: Juntando duas variáveis e transformando em uma string concatenada
let firstName = 'Antonia';
let lastName = 'Francesca';

function fullname(first, last){
  newWord = ((first)+ " " +(last));
  return newWord
};

console.log(fullname(firstName, lastName));

