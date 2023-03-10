/*Declarar uma variável com o seu nome
Declarar uma variável com a sua idade
Declarar uma variável com a sua comida
favorita e não atribuir valor
Atribuir valor a sua comida favorita
Declarar 5 variáveis diferentes sem valore*/

/*
var nome = "Kennes Eduardo";
var idade = 23;
var comidaPreferida;
var comidaPreferida = "Pizza";

var time,
    professor,
    pais,
    endereco,
    rua;

console.log(nome, idade, comidaPreferida );

*/


/*  Tipos de Dados  */

var nome = "Kennes Eduardo";
var sobrenome = "Marques";
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols * 2} gols`; // Utilizando Template String

console.log( frase1, frase2);


console.log("*****exercicios******");

// Declare uma variável contendo uma string
var esposa = "Daniele Marques"

// Declare uma variável contendo um número dentro de uma string
var idade = "23"

// Declare uma variável com a sua idade
var idade = 23;

/* Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas*/
var nome = "Kennes"
var sobrenome = "Marques";
var nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";
console.log(frase);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);


/*   Numeros e operador */
console.log("****Numeros e operador******");

/* Operadores Aritmeticos*/
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4


 //A ORDEM IMPORTA
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

console.log(total1);

// incremento
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //30
console.log(total);

// Crie duas expressões que retornem NaN
var NAN = 'um' / 2;
console.log(NAN);

// Somar a string '200' com o número 50 e retornar 250
var soma = +"200" + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 1;
console.log(++x);


/* Condicionais e Bollean */
console.log("---Condicionais e Bollean---")

var possuiGraduacao = false;

if(possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}

//CONDICIONAIS ELSE IF 
console.log("CONDICIONAIS ELSE IF ")
var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}

//O operador !, nega uma operação booleana. Ou seja, !true é igual a false

if(!true); // false

/*Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy */

//OPERADORES DE COMPARAÇÃO
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true
 
//OPERADORES LÓGICOS && 
//&& Compara se uma expressão e a outra é verdadeira
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

if ((5 - 5) && (5 + 5)) {
    console.log("Verdadeiro");
}else {
    console.log("Falso")
}

if ((5 + 5) && (5 + 5)) {
    console.log("Verdadeiro");
}else {
    console.log("Falso")
}

//OPERADORES LÓGICOS ||
// || Compara se uma expressão ou outra é verdadeira
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true


console.log("---SWITCH---")
/*Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeir*/

var corFavorita = 'pink';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeK = 23;
var idadeP = 24;

if (idadeK > idadeP) {
    console.log("O kennes é mais velho");
}else if (idadeK === idadeP) {
    console.log("Idede de ambos são iguais");
}else {
    console.log("O parente é mais velho ");
}



// Qual valor é retornado na seguinte expressão? False
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china ) {
    console.log("o Brasil tem mais habitantes")
}else{
    console.log("China tem mais Habitantes")
}

// O que irá aparecer no console? True
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}