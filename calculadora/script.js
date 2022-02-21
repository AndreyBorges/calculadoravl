// // const videogames = ["Xbox", "Ps4", "Nitendo", "game-boy"];
// // // videogames.push();

// // // console.log(videogames.length);
// // // console.log(videogames.pop());
// // // console.log(videogames);

// // // for (let i = 0; i <= videogames.length; i++) {
// // //   console.log(videogames[i]);
// // //   if (videogames[i] === videogames[3]){
// // //     break
// // //   }
// // // }

// // // let i = 0;
// // // while (i < 10) {
// // //   console.log(videogames);
// // //   i++;
// // // }

// // videogames.forEach(function (frutas, i, type) {
// //   videogames.pop();
// //   console.log(frutas, i, type);
// // });

// // // Crie uma array com os anos que o Brasil ganhou a copa
// // // 1959, 1962, 1970, 1994, 2002

// // const brasil = ["1959", "1962", "1970", "1994", "2002"];

// // // Interaja com a array utilizando um loop, para mostrar
// // // no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// // for (let i = 0; i < brasil.length; i++) {
// //   console.log(`O brasil ganhou a copa de ${brasil[i]}`);
// // }

// // // Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// // const frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
// // for (let idx = 0; idx < frutas.length; idx++) {
// //   console.log(frutas[idx]);
// //   if (frutas[idx] === frutas[2]) {
// //     break;
// //   }
// // }

// // // Coloque a última fruta da array acima em uma variável,
// // // sem remover a mesma da array.

// // const brasil1 = ["1959", "1962", "1970", "1994", "2002"];
// // const ultAno = brasil1[brasil1.length - 1];
// // console.log(brasil1);
// // console.log(ultAno);

// // let dinheiro = 20;
// // let conta = 10;
// // const podecomprar = dinheiro >= conta ? "Pode comprar" : "Não pode comprar";
// // console.log(podecomprar);

// // // Some 500 ao valor de scroll abaixo,
// // // atribuindo o novo valor a scroll
// // let scrolls = 1000;
// // scrolls += 500

// // console.log(scrolls)

// // // Atribua true para a variável darCredito,
// // // caso o cliente possua carro e casa.
// // // E false caso o contrário.
// // const possuiCarro = true;
// // const possuiCasa = true;
// // const darCredito = (possuiCarro === possuiCasa) ? "Você conseguiu seu credito." : "Desculpe, mas não podemos dar credito." ;

// // console.log(darCredito)

// // Por qual motivo o código abaixo retorna com erros? porque estavam dentro de um escopo e sendo chamados por fora

// // var cor = "preto";
// // const marca = "Fiat";
// // let portas = 4;
// // console.log(cor, marca, portas);

// // // Como corrigir o erro abaixo? a variavel const, estava dentro de uma função e sendo acionada por outra função em outro escopo.
// // const dois = 2;
// // function somarDois(x) {
// //   return x + dois;
// // }
// // function dividirDois(x) {
// //   return x + dois;
// // }
// // console.log(somarDois(4));
// // console.log(dividirDois(6));

// // // O que fazer para total retornar 500? trocar a variavel var para let, pois ela estava vazando o escopo dela, e reatribuindo o valor quando acionada dentro do elemento de loop.
// // const numero = 50;

// // for (let numero = 0; numero < 10; numero++) {
// //   console.log(numero);
// // }

// // const total = 10 * numero;
// // console.log(total);

// // // O argumento item será atribuído dinamicamente
// // const videoGames = ["Switch", "PS4", "XBox", "3DS"];

// const estacionamento = [
//   {
//     cliente: "vanderson",
//     veiculo: "carro",
//     fabricante: "BMW",
//     anoDoCarro: 2022,
//   },
//   {
//     cliente: "Amanda",
//     veiculo: "moto",
//     fabricante: "Suzuki",
//     anoDoCarro: 2022,
//   },
//   {
//     cliente: "guilherme",
//     veiculo: "carro",
//     fabricante: "Porsche",
//     anoDoCarro: 2022,
//   },
// ];

// estacionamento.push({
//   cliente: "Andrey",
//   veiculo: "Skate",
//   fabricante: "Não sei",
//   anoDoCarro: 1997,
// });

// // const nomes = [];
// // estacionamento.forEach(function (item) {
// //   nomes.push(item.cliente)
// // });

// // nomes.forEach(function(item){
// //   const elemento = document.createElement("h2")
// //   const text = item
// //   elemento.appendChild(text)
// // })

// const maça = {
//   cor: "vermelha",
//   tamanho: `${6}cm`,
//   gosto: "doce",
//   tipo: "fruta",
//   formato: "arrendodado",
// };

// maça.cor = "azul"
// maça["cor"] = "verde"
// maça.perigo = "Engasgar com o caroço"
// delete maça.cor
// console.log(maça);



// function clear (){
//   result.
// }

const btn = document.querySelectorAll(".numero");
const result = document.querySelector("#resultado");
const operador = document.querySelectorAll(".operador")
const apagar = document.querySelector('.apagar')
const igual = document.querySelector('.igual')

btn.forEach((button) => {
  button.onclick = (e) => {
    if (result.innerText === "0") result.innerText = e.target.innerText;
    else result.innerText += e.target.innerText;
  };
});

operador.forEach((button) => {
  button.onclick = (e) => {
    if (result.innerText === "0") result.innerText = e.target.innerText;
    else result.innerText += e.target.innerText;
  };
});