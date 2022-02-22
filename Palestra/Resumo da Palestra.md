# Operadores Aritméticos

- Pra que servem: 
    São  utilizados para implementar seus dados, como concatenar strings, modular os números, e outras estruturas.


- Quais são? 
    Existem 2 tipos, os operadores padroẽs e os operadores complementares, eles são:

Padrões;

 soma +
 subtração -
 multiplicação *
 divisão real /

Complementares; 

módulo (resto da divisão inteiro) %
exponenciação (ao quadrado) **

    #Operadores abaixo são utilizados em operadores unários#

        incremento ++ 
        decremento -- 

    #os 2 abaixo tambem conseguem mudar o tipo de string, para number, se o conteudo da string for somente numerico.#

        negação - 
        adição + 
        

    Ordem de precedência
        
        1° - ()
        2° -  **
        3° -  * / %
        4° -  + -
       
    Daremos 3 exemplos:
            
            const name = “Vanderson “
            const sobrenome = “Andrade”
            const nomeCompleto = “name” + “ ” + “sobrenome”
            const nomeCompleto = `${name} ${sobrenome}`
            

            const idade = 24
            const anoAtual = 2022
            const nascimento = anoAtual - idade

            let contador = 1
            ++contador
            console.log(contador) // Irá retornar 2



# Operadores de Comparção

-Antes de tudo é importante falar o que são valores booleanos, e como retorná-los.

    #Um valor booleano é um valor que volta true e false, e existe uma termologia chamada TRUTHY E FALSY:#

    Truthy - retorna um valor true verifica quando uma string tem um valor dentro ” ”,  ou ' ' , quando for um number que não seja 0,  um objeto , uma array e etc.

    Falsy - retorna um valor false se o number for 0 ou retornar NaN, Null, Undefined, strings vazias “” , '' ou ``.

-QUAIS SÃO E PRA QUE SERVEM ?

    Operadores de comparação sempre irão retornar um valor booleano, são usados para comparar o valor da esquerda e o da direita, para fazer a validação e saber se são iguais, maiores que, menores que, diferente de e etc, com a intenção de ativar um efeito no código.

-Os operadores são:

>    - Maior que 
<    - Menor que 
>=   - Maior ou igual  a 
<=   - Menor ou igual  a 

-Fazem comparações estritas(podendo ou não fazer parte do mesmo tipo, dependendo de seu grau)

==    - verdadeiro, mas não é tão estrito
!=    - verdadeiro se não forem iguais
===   - verdadeiro se for igual e ter o mesmo tipo
!==   - verdadeiro se não for igual e ou não ter o mesmo tipo

-Exemplos de possíveis resultados:

const x = 5
const y = 4
const z = "5"


(x>y) = irá retornar um valor (verdadeiro), pois 5 é maior que 4.
(x<y) = irá retornar um valor (falso), pois 5 é menor que 4.
(x>=y) = irá retornar um valor (verdadeiro), pois 5 é maior ou igual a 4.
(x<=y) = irá retornar um valor (falso), pois 5 é menor ou igual a 4.
Comparações estritas:
(x==z) = irá retornar um valor (verdadeiro), pois 5 e "5" são iguais, mesmo não tendo o mesmo tipo.
(x!=y) = irá retornar um valor (falso), pois 5 é igual a "5", e a ! transforma o verdadeiro em falso.
(x===z) = irá retornar um valor (falso), pois 5 tem o tipo diferente de "5", sendo x é  um tipo number e z é do tipo string.
(x!==y) = irá retornar um valor (verdadeiro) pois 5 tem o tipo diferente de "5", sendo x é number e z é string e a ! transforma o verdadeiro em falso.




# Estruturas Condicionais

- O que são?

    As estruturas condicionais são usadas para explicar para o código o que fazer. Elas estão ligadas a tomada de decisões dentro de um código, também as utilizamos para definir se algo deve acontecer ou não!

- Quais são? 

    “If and Else”, “Switch” e “Operador ternario "?"”

- Como são Utilizados ?

    if Else: 

    #Primeiro Exemlplo#

const a = 2
const b = 4
const c = 0
const d = 8

if (a && c) {
    if ((a * b) === d) {
    console.log ("2 multiplicado por 4 é igual a 8")
    }
} else if (b > d){
    console.log("O primeiro valor é MAIOR.")
} else {
  console.log("Erro.")
}

    #Segundo Exemplo#
const a = "Andrey"
const b = "Vanderson"
const c = "Amanda"
const d = "Guilherme"


if (a && b && c && d){
  if(a !== b){
    console.log(`${a} e ${b} existem, porem eles são diferentes!`)
  }
} else {
  console.log("Erro.")
}


    switch:

    #primeiro Exemplo#
const a = 2;
const b = 4;


switch (b) {
  case 2:
    console.log(a, "é igual a 2");
    break;
  case 2**2:
    console.log(b, "é igual a 4");
    break;
  default:
    console.log("Erro.");
}


    #Segundo Exemplo#
const fla = "flamengo"
const flu = "fluminense"
const vas = "vasco"


switch (fla){
    case "fluminense":
        console.log("Sou fluminense")
        break
    case "vasco":
        console.log("Sou vasco")
        break
    case "flamengo":
        console.log("Sou flamengo")
        break
    default:
        console.log("Não gosto de futebol")
}


   Operador ternario "?" ;

let dinheiro = 20;
let conta = 10;
const podecomprar = dinheiro >= conta ? "Pode comprar" : "Não pode comprar";
console.log(podecomprar);
    

# Operadores Logicos.

- O QUE SÃO? 
    São operadores usados para realizar ações em estruturas. Retornam valores booleanos (true or false). Elas podem ser do tipo AND(&&), OR (| |) e NOT(!).

    NOT (!) - Operador lógico de negação, se utilizado antes de um operador que aceite sua função ele transforma sua decisão para o oposto, ou seja o que for true se torna false e vice versa.

    AND (&&) - Define que os dois valores existem, se um existir e o outro não ou os 2 não existirem ele retorna false, se os 2 existirem retorna true,
    Sendo que ele retorna o primeiro valor de false que encontrar ou o ultimo de true.

    OR (||) - Define que só um dos valores precisa existir para retornar verdadeiro e já captura este valor.

   - COMO SÃO UTILIZADOS ?

   #Primeiro Exemplo#
    const a = 2;
    const b = 0;
    const c = "2";
    const d = "andrey";
    const e = "andrew";
    
    
    if (a && b && c && d) {
      console.log("todos existem")
    } else if (b || c || a || d){
      console.log("um deles existe")
    } 
    
    
    const a = true && true      | Retornará true 
    const b = false && true     | Retornará false
    const c = false && 10       | Retornará false
    const d = 'ele' && 'eu'     | Retornará eu
    const e = 'ele' && false    | Retornará false
    const f = false && 'ele'    | Retornará false
    
    
    e
    
    
    const a = true  || true     | Retornará True
    const b = false || true     | Retornará true
    const c = false || 10       | Retornará 10
    const d = 'eu'  || 'ele'    | Retornará eu
    const e = 'ele' || false    | Retornará ele
    const f = false || 'ele'    | Retornará ele
    


# Funções e Arrow Functions

    As funções servem para tratar um bloco de códigos, e depois que finalizadas podem ser reutilizadas várias vezes para casos parecidos.
    Sempre entendendo que a aplicabilidade dela é de acordo com o tratamento feito dentro de seu escopo, não se pode aplicar uma função que trata dados do tipo number, em uma string pois ocasionará um erro e assim sucessivamente.

    Existem 2 tipos de functions, as functions normais e as arrow functions,a diferença entre elas é que uma function tem o código mais extenso tendo  que declarar seu return, enquanto as arrow functions tem uma escrita mais simples para deixar o código mais fácil e otimizado.

    #Um exemplo de expressions functions seria;#

    const body = document.querySelector("body")
        function handleClick(){
        body.classList.toggle("actived")
    }
    window.addEventListener('click',handleClick)

    #E arrow functions seria ;#

    const body = document.querySelector("body");
    const handleClick = () => body.classList.toggle("actived");
    window.addEventListener("click", handleClick);



# Manipulando Obejetos e Arrays

    Objeto é uma propriedade que pode ser ligada a uma variável normal, essa propriedade está totalmente ligada ao objeto que ela está sendo atribuída, e será utilizada para descrevê-lo.

    #Exemplo de objeto: 

    const maça = {
        cor: "vermelha",
        tamanho: `${6}cm`,
        gosto: "doce",
        tipo: "fruta",
        formato: "arrendodado"
    }
      maça.cor = "azul"  //Modificando a cor da maçã!
      maça["cor"] = "verde" //Outra forma de alterar o valor!
      maça.perigo = "Engasgar com o caroço" //Adicionando atributos a maçã!
      delete maça.cor //Deletando atributo e valor da maçã!
      console.log(maça)
      

    Arrays nos auxiliam para podermos utilizá-lo como uma única variável para armazenar uma lista de diferentes elementos, por isso, ela tem uma ótima usabilidade para estes tipos de objetivos.

    #Exemplo de array: 

    const estacionamento = [
        {
          cliente: "vanderson",
          veiculo: "carro",
          fabricante: "BMW",
          anoDoCarro: 2022,
        },
        {
          cliente: "Amanda",
          veiculo: "moto",
          fabricante: "Suzuki",
          anoDoCarro: 2022,
        },
        {
          cliente: "guilherme",
          veiculo: "carro",
          fabricante: "Porsche",
          anoDoCarro: 2022,
        },
      ];
      
      
        estacionamento.push({ //adicionando valor e atributo a array!
        cliente: "Andrey",
        veiculo: "Skate"
        fabricante: "Não sei",
        anoDoCarro: 1997,
    });


estacionamento.pop() - remove o ultimo item da array.
estacionamento.push - implementa um novo item na array.
estacionamento.shift() - remove o primeiro item.
estacionamento.unshift("") - implementa um novo item na array só que no começo.




# Estruturas de Repetição (Loops)

Estas estruturas fazem como o nome já diz “repetições” no seu código, quando você quer verificar cada item de um objeto, ou array, fazer estruturas que precisam repetir funções muitas vezes, a melhor opção seria usar uma dessas estruturas, pois irão te retornar de uma forma simples e prática.

- Quais são elas ?
    (FOR, WHILE, FOR IN, FOR OF, FOREACH)

    for

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }


    for of


    const carros = [
    {carro: 'Corsa', marca: 'Chevrolet', preco: 25000},
    {carro: 'Civic', marca: 'Honda', preco: 40000}
    ]
    let total = 0
    for(const carro of carros) {
    total += carro.preco
    }
    console.log(total)


    while


let i = 1
while (i <= 10) {
    console.log(i);
    i++;
}


    for in


let peaple = {
    name: 'Guilherme',
    age: 27,
    weight: 72.0
}


for (let prop in peaple) {
     console.log(prop)
     console.log(peaple[prop])
}




# Manipulando o DOM

- DOM - DOCUMENT OBJECT MODEL 

- O QUE É?
    É o HTML convertido para um objeto JS,  é uma API(“Application Programming Interface”) que representa e interage com o HTML, ou seja ele manipula o HTML e você só programa  para web porque existe o DOM.

    EM SEGUIDA VAMOS DAR ALGUNS EXEMPLOS DE COMO PEGAR UM ELEMENTO HTML PELO JS (DOM); Você deve atribuí-lo a uma variável para posteriormente identificá-lo no seu código!

    1- const element = document.getElementById('container') pega o elemento pelo Id.
    2- const element = document.getElementByClasseName('menu') pega o elemento pela classe.
    3- const element =  document.getElementByTagName('h1') pega todos os h1 que estiverem no código.
    4- const element = document.querySelector('.container') pega o primeiro elemento correspondente pelo seletor css, nesse caso pegamos uma class de uma tag do nosso HTML.
    5- const elements = document.querySelectorAll(#container) pega todos os seletores (NODELIST) diferente do ByClasseName que retornaria um HTML collection.



# Eventos em Javascript
    
    Eventos são ações ou ocorrências que acontecem no sistema, que nos possibilita fazer as interações com a nossa aplicação, como mexer o mouse, clicar o mouse, clicar uma tecla do seu keyboard, estas ações de mudança que ocorre quando fazemos esses exemplos são os famosos eventos em javascript.

    ex:
    onBlur: remove o foco do elemento.
    onChange: muda o valor do elemento.
    onClick: o elemento é clicado pelo usuário.
    onFocus: o elemento é focado.
    onkeyPress: o usuário pressiona uma tela sobre o elemento.
    onLoad: carrega o elemento por completo.
    onMouseOver: define ação quando o usuário passa o mouse sobre o elemento.
    onMouseOut: define ação quando o usuário retira o mouse sobre o elemento.
    onSubmit: define ação ao enviar um formulário.


    ex.:

    const btn = document.querySelector('button');

    const bgBtn = () => btn.style.background = "black"

    btn.onclick = bgBtn

                     ou

    const body = document.querySelector('body')

    const bg = () => body.style.background = "black"


    window.addEventListener('scroll', bg)

