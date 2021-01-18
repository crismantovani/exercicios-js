//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://evelisee.github.io/laboratoria/array-objetos.pdf
document.getElementById("app").innerHTML = `
<h1>Hello!</h1>
`;

//--------------------
// Exercícios de arrays
// --------------------
// 1. Dado a variável de mentores da laboratória, percorra a lista e mostre no console um mentor por linha.
const listaMentoresLaboratoria = [
  "Mônica",
  "Isabella",
  "Juliana",
  "Evelise",
  "Gabriel",
  "Cintia",
  "Rafael",
];

//1. Resposta

// Opção 1 (verboso)
for(let i = 0; i < listaMentoresLaboratoria.length; i++){
  console.log(listaMentoresLaboratoria[i])
}

// Opção 2 (não verboso) 
//(Para executar, comente linhas 23 a 25 e descomentar linhas 30 a 32)

// for (let mentor of listaMentoresLaboratoria) {
// console.log(mentor);
// }

//                        Fluxo do for [Exercício 1]                        //

//  Loop = Acessa várias partes do array.
//  O for serve pra fazer o loop automaticamente.
// 'let i' é a var do índice que começa em '0'.
// for () percorra a minha lista utilizando o índice que começa no 0.
// O < listaMentoresLaboratoria.lenght limita o tamanho do indice.
// i++ concatenando até acabar a quantidade de pessoas na lista.
// Sempre que adiciona/remover uma pessoa, ele fará automaticamente, pois o for está definido para aumentar o índice conforme o tamanho do array aumentar/diminuir.

//                        Fluxo do for in [Exercício 1]                        //
//  'for in' pega o índice de cada item
//  for (mentor) esse loop percorre o tamanho DE (of) listaMentoresLaboratoria 
//  O console exibe item a item do indice de mentores.


// 2. Mostre o tamanho do array da variável listaMentoresLaboratória;

// 2. Resposta
console.log(listaMentoresLaboratoria.length);

//Fluxo Resposta 2
//______________________
//O .lenght percorre todo o meu array.

// 3. Dado um array de comidas, adicione uma comida de sua preferência e mostre no console.
const comidasGostosas = ["Lasanha", "Strogonoff", "Batata frita"];
console.log(comidasGostosas);

//Resposta
comidasGostosas.push("Churrasco");
  console.log(comidasGostosas[3]); 

//Fluxo do push [Exercício 3]
//_______________________________
//O push adiciona um novo elemento ao array comidasGostosas.

// 4. Dado um array de palavras, filtre apenas pelas que começam com a letra A
const palavras = [
  "abacaxi",
  "samambaia",
  "coxinha",
  "cachorro",
  "anel",
  "amaciante",
  "teclado",
  "cortador de unha",
  "adstringente"
];

//Resposta 4
const searchLetterA = (letterA) => letterA.toLowerCase().indexOf('a') === 0;

let startsWithA = palavras.filter(searchLetterA);
console.table(startsWithA)

// 5. Dado um array de números, retorne um novo array apenas com múltiplos de 2
const numeros = [0, 2, 4, 7, 5, 13, 12, 14, 29, 10, 1, 31];
console.log(numeros);

// Resposta 5
function multiplesOftwo(numList, num) {
  return numList.filter(function(n) { return n % num === 0; })
}

console.log(multiplesOftwo(numeros, 2));

//6. Dado esse array de números, traga na ordem crescente;

//Resposta 6

numeros.sort(function (a,b) {
  return a - b;
});

// 7. Dado esse array de números, traga a soma total dos valores;

const array = [0, 2, 4, 7, 5, 13, 12, 14, 29, 10, 1, 31];
let result = 0;

for (let i = 0; i < array.length; i++) {
  result += array[i];
}

console.log("O total da soma é", result);

//--------------------
// Exercícios de objetos
// --------------------
// 1. Dado uma variável de objeto, mude o campo "nome", para outro de sua preferência;
const meuPet = {
  nome: "Luke",
  tipo: "cachorro",
  raça: "sem raça definida"
};
console.table(meuPet);

// Resposta 1
meuPet.nome = "Darth Vader"

// 2. Dado um array de objetos, traga apenas os que contêm o tipo sanguíneo o+
const bancoDeSangue = [
  { nome: "Juliane", tipo: "O", rh: "-" },
  { nome: "Mariane", tipo: "AB", rh: "+" },
  { nome: "João", tipo: "B", rh: "+" },
  { nome: "Rodrigo", tipo: "A", rh: "+" },
  { nome: "Ingrid", tipo: "O", rh: "+" },
  { nome: "Marcelo", tipo: "AB", rh: "-" },
  { nome: "José", tipo: "O", rh: "+" },
  { nome: "Vinícios", tipo: "A", rh: "+" },
  { nome: "Jéssica", tipo: "B", rh: "+" }
];
console.table(bancoDeSangue);

//Resposta 2

// console.log(bancoDeSangue[2].nome)

let bloodType = bancoDeSangue.filter(function(result) {
  return result.tipo === "O" && result.rh === "+";
});

console.log('Somente tipo O+', bloodType)

//--------------------------------//----------------------------------------------//
//3. Mostre no console a variável bancoDeSangue por ordem alfabética do campo nome

bancoDeSangue.sort((a, b) => a.nome.localeCompare(b.nome))
console.table("Em ordem alfabética", bancoDeSangue);

// bancoDeSangue.sort(function(a, b){
//   var nomeA=a.nome.toLowerCase(), nomeB=b.nome.toLowerCase();
//   if (nomeA < nomeB) //sort string ascending
//    return -1;
//   if (nomeA > nomeB)
//    return 1;
//   return 0; //default return value (no sorting)
//  });

 // console.table(bancoDeSangue)
