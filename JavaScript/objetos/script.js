//Objetos

var pessoa = {
    nome: 'Kennes',
    idade: 23,
    profissao: 'Front End Developer',
    possuiFaculdade: true,
}
  
console.log(pessoa.nome); // 'Kennes'
console.log(pessoa.possuiFaculdade); // true

//MÉTODOS
//É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20

// MÉTODOS
// Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

// ORGANIZAR O CÓDIGO
// Objetos servem para organizar o código em pequenas partes reutilizáveis.
// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?


Math.PI; // 3.14
console.log(Math.random()); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// DOT NOTATION GET
// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
var bg = menu.backgroundColor; // '#84E'

//ADICIONAR PROPRIEDADES E MÉTODOS
menu.backgroundColor = '#000'
menu.color = 'blue';



/*PALAVRA-CHAVE THIS
this irá fazer uma referência ao próprio objeto.*/

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;  // pega a variavel de dentro, sem this. de fora
  }
}

console.log(menu.metadeHeight()); // 25
// sem o this, seria 60


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo
var dadosPessoais = {
    nome: 'Kennes Eduardo',
    sobrenome: 'Marques',
    peso: 89,
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
}

// ou posso fazer assim

// dadosPessoais.nomeCompleto = function(){
//   return `${this.nome} ${this.sobrenome}`
// }




// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homen') {
      return 'vou te mode'
    } else {
      return 'Não vou latir'
    }
  }
}  

// TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'Kennes';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('es', 'ys'); // 'kennys'
nome; // 'Kennes'

//numeros

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

//funcoes
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

console.log(areaQuadrado.length); // 1

//seleciona 1 tag dentro do seu elemento(index.html)
var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

// nomeie 3 propriedades ou métodos de strings
var nome = 'Kennes'; 

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
// btn.addEventListener
// btn.after
// btn.animate
// btn.id
// btn.appendChild

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
//https://clipboardjs.com/


//Arrays e Loops 1

console.log("****Arrays e Loops 1***")

// ARRAY
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ['Switch', 'PS4', 'XBox'];

console.log(videoGames[0]); // Switch
console.log(videoGames[2]); // Xbox

console.log(videoGames.pop()); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

// Existem diversos outros métodos, como map, reduce, forEach


// FOR LOOP

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

// WHILE LOOP
console.log("WHILE lopp");
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console


// ARRAYS E LOOPS E BREAK 
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}



// FOREACH
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var frutas = ['banana', 'maça', 'abacaxi', 'uva'];
frutas.forEach(function(fruta, index) {
  console.log(fruta, index);
});
// O argumento item será atribuído dinamicamente



// EXERCÍCIO

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < brasilCampeao.length; i++ ){
  console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (var i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
  if (frutas[i]=== 'Pera'){
    console.log('achei a Pera por isso parei');
    break;
  }
}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);


// OPERADORES DE ATRIBUIÇÃO
// Podem funcionar como formas abreviadas

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)


// OPERADOR TERNÁRIO
// Abreviação de condicionais com if e else

var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); // Pode beber

// condição ? true : false


// IF ABREVIADO
// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');


  // EXERCÍCIO

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa)
console.log(darCredito);


//Escopo

// ESCOPO DE FUNÇÃO
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// VARIÁVEL GLOBAL (ERRO)
// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca


// CONST E LET NO LUGAR DE VAR
if(true) {
  let mes = 'Dezembro';
  console.log(mes);
}
// console.log(mes); // undefined


// FOR LOOP
// Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}


// Por qual motivo o código abaixo retorna com erros?
//R: tinha dois erros fora do bloco e variavel escrita errada
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

const dois = 2;
// Como corrigir o erro abaixo?
function somarDois(x) {
  return x + dois;

}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

let total = 10 * numero;
console.log(total);
