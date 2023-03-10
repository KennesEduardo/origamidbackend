console.log("---FUNCOES---");
/*Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.*/

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4


function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);

//PARÂMETROS E ARGUMENTOS

/*Ao criar uma função, você pode definir parâmetros.
Ao executar uma função, você pode passar argumentos. */

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(90, 1.65)); // 90 e 1.65 são os argumentos
console.log(imc(80, 1.80)); // 80 e 1.80 são os argumentos



//PARÊNTESES EXECUTA A FUNÇÃO

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}

console.log(corFavorita('azul'));



//função 
function mostraConsole() {
  console.log("Clicou");
}

addEventListener('click', mostraConsole);

//VALORES RETORNADOS
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(65));

//ESCOPO  - Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`
}
console.log(faltaVisitar(3));


/*ESCOPO LÉXICO
Funções conseguem acessar variáveis que foram criadas no contexto pai*/ 

var profissao = 'Full-Stack';

function dados() {
  var nome = 'Kennes';
  var idade = 23;
  function outrosDados() {
    var endereco = 'Ituituaba - Minas Gerais';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); 
// console.log(outrosDados()); // retorna um erro

console.log("EXERCICIOS")

// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(x) {
  return !!x;
}
console.log(verificaTruthy(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado1,lado2,lado3,lado4) {
  
  return perimetro = lado1 + lado2 + lado3 + lado4;
  
}
console.log(perimetroQuadrado(5,5,2,2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}` 
}
console.log(nomeCompleto('Kennes Eduardo', 'Marques'));

// Crie uma função que verifica se um número é par

function verificaPar(num){
  if (num % 0 ){
    return ("este número é par")
  }else{
    return ('o número digitado é ímpar')
  }
}
console.log(verificaPar(11));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function retornaTipoDeDados(dados) {
  return (typeof dados);
}
console.log(retornaTipoDeDados("kennes"));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
  console.log("Kennes Eduardo Maques Silva")

});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
