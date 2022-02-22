/** Operadores Aritimeticos */

// const nome = 'Vanderson'
// const sobrenome = 'Andrade'
// const nomeCompleto = 'name' + ' ' + 'sobrenome'
// const nomeCompleto = `${nome} ${sobrenome}`
// console.log(nomeCompleto)

// const idade = 24
// const anoAtual = 2022
// const nascimento = anoAtual - idade
// console.log(nascimento)

// let contador = 1
// ++contador
// console.log(contador) // Irá retornar 2

/** Operadores de Comparação */

// const x = 5
// const y = 4
// const z = "5"

// (x>y) /*= irá retornar um valor (verdadeiro), pois 5 é maior que 4.*/
// (x<y) /*= irá retornar um valor (falso), pois 5 é menor que 4.*/
// (x>=y) /*= irá retornar um valor (verdadeiro), pois 5 é maior ou igual a 4.*/
// (x<=y) /*= irá retornar um valor (falso), pois 5 é menor ou igual a 4.*/

// Comparações estritas:

// (x==z)/*= irá retornar um valor (verdadeiro), pois 5 e "5" são iguais, mesmo não tendo o mesmo tipo.*/
// (x!=y)/*= irá retornar um valor (falso), pois 5 é igual a "5", e a ! transforma o verdadeiro em falso.*/
// (x===z)/*= irá retornar um valor (falso), pois 5 tem o tipo diferente de "5", sendo x é  um tipo number e z é do tipo string.*/
// (x!==y)/*= irá retornar um valor (verdadeiro) pois 5 tem o tipo diferente de "5", sendo x é number e z é string e a ! transforma o verdadeiro em falso.*/

/** ESTRUTURAS CONDICIONAIS */

// const a = 2
// const b = 4
// const c = 0
// const d = 8

// if (a && c) {
//     if ((a * b) === d) {
//     console.log ("2 multiplicado por 4 é igual a 8")
//     }
// } else if (b > d){
//     console.log("O primeiro valor é MAIOR.")
// } else {
//   console.log("Erro.")
// }

// const a = "Andrey"
// const b = "Vanderson"
// const c = "Amanda"
// const d = "Guilherme"

// if (a && b && c && d){
//   if(a !== b){
//     console.log(`${a} e ${b} existem, porem eles são diferentes!`)
//   }
// } else {
//   console.log("Erro.")
// }

// const a = 2;
// const b = 4;

// switch (b) {
//   case 2:
//     console.log(a, "é igual a 2");
//     break;
//   case 2**2:
//     console.log(b, "é igual a 4");
//     break;
//   default:
//     console.log("Erro.");
// }

// const fla = "flamengo"
// const flu = "fluminense"
// const vas = "vasco"

// switch (fla){
//     case "fluminense":
//         console.log("Sou fluminense")
//         break
//     case "vasco":
//         console.log("Sou vasco")
//         break
//     case "flamengo":
//         console.log("Sou flamengo")
//         break
//     default:
//         console.log("Não gosto de futebol")
// }

// let dinheiro = 20;
// let conta = 10;
// const podecomprar = dinheiro >= conta ? "Pode comprar" : "Não pode comprar";
// console.log(podecomprar);

/** OPERADORES LOGICOS */

// const a = 2;
// const b = 0;
// const c = "2";
// const d = "andrey";
// const e = "andrew";

// if (a && b && c && d) {
//   console.log("todos existem")
// } else if (b || c || a || d){
//   console.log("um deles existe")
// }

// const a = true && true /*      | Retornará true */
// const b = false && true /*     | Retornará false */
// const c = false && 10 /*       | Retornará false */
// const d = 'ele' && 'eu' /*     | Retornará eu */
// const e = 'ele' && false /*    | Retornará false */
// const f = false && 'ele' /*    | Retornará false */

// // e

// const a = true  || true /*     | Retornará True*/
// const b = false || true /*     | Retornará true*/
// const c = false || 10   /*     | Retornará 10*/
// const d = 'eu'  || 'ele'/*     | Retornará eu*/
// const e = 'ele' || false/*     | Retornará ele*/
// const f = false || 'ele'/*     | Retornará ele*/

/** EXPRESSIONS E ARROW FUNCTIONS */

// const body = document.querySelector("body")
//         function handleClick(){
//         body.classList.toggle("actived")
//     }
//     window.addEventListener('click',handleClick)

// const body = document.querySelector("body");
// const handleClick = () => body.classList.toggle("actived");
// window.addEventListener("click", handleClick);

/** Manipulando Objetos e Arrays */

// const maça = {
//   cor: "vermelha",
//   tamanho: `${6}cm`,
//   gosto: "doce",
//   tipo: "fruta",
//   formato: "arrendodado",
// };
// maça.cor = "azul"; //Modificando a cor da maçã!
// maça["cor"] = "verde"; //Outra forma de alterar o valor!
// maça.perigo = "Engasgar com o caroço"; //Adicionando atributos a maçã!
// delete maça.cor; //Deletando atributo e valor da maçã!
// console.log(maça);

// const estacionamento = [
//   {
//     cliente: "Vanderson",
//     veiculo: "Carro",
//     fabricante: "BMW",
//     anoDoCarro: 2022,
//   },
//   {
//     cliente: "Amanda",
//     veiculo: "Moto",
//     fabricante: "Suzuki",
//     anoDoCarro: 2022,
//   },
//   {
//     cliente: "Guilherme",
//     veiculo: "Carro",
//     fabricante: "Porsche",
//     anoDoCarro: 2022,
//   },
// ];

// estacionamento.push({
//   //adicionando valor e atributo a array!
//   cliente: "Andrey",
//   veiculo: "Skate",
//   fabricante: "Não sei",
//   anoDoCarro: 1997,
// });
// estacionamento.pop(); /* - remove o ultimo item da array.*/
// estacionamento.shift(); /* - remove o primeiro item.*/
// estacionamento.unshift({
//   cliente: "Andrew",
//   veiculo: "Foguete",
//   fabricante: "SpaceX",
//   anoDoCarro: 2021,
// }); /* - implementa um novo item na array só que no começo.*/

// console.log(estacionamento);

/** Estruturas de Repetição */