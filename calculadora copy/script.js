var estado;
var op1;
var op2;
var resultado;
var operadores;

let calculadora = {
  numeroArray: new Array(),

  inicializacao: function () {
    estado = "inicializado";
    this.display();
  },
  soma: function () {
    operadores = "adicao";
    estado = "operador2";
    this.numeroArray = [];
  },
  subtracao: function () {
    operadores = "adicao";
    estado = "operador2";
    this.numeroArray = [];
  },
  divisao: function () {
    operadores = "divisao";
    estado = "operador2";
    this.numeroArray = [];
  },
  multiplicar: function () {
    operadores = "multiplicacao";
    estado = "operador2";
    this.numeroArray = [];
  },

  ac: function () {
    calculadora.inicializacao();
    this.numeroArray = [];
  },
  del: function () {
    this.numeroArray.pop();
    this.proxNumbero();
    this.display;
  },
  igual: function () {
    switch (operadores) {
      case "soma":
        resultado = op1 + op2;
        estado = "resultado";
        this.display();
        break;
      case "subtracao":
        resultado = op1 - op2;
        estado = "resultado";
        this.display();
        break;
      case "divisao":
        resultado = op1 / op2;
        estado = "resultado";
        this.display();
        break;
      case "multiplicar":
        resultado = op1 * op2;
        estado = "resultado";
        this.display();
        break;
    }
  },
  display: function () {
    switch (estado) {
      case "inicializado":
        document.querySelector(".display").innerText = "Display";
        estado = "operando1";
        break;
      case "operando1":
        document.querySelector(".display").innerText = op2;
        break;
      case "operando2":
        document.querySelector(".display").innerText = op2;
        break;
      case "resultado":
        document.querySelector(".display").innerText = resultado;
        break;
    }
  },
  proxNumero: function (digito) {
    switch (estado) {
      case "operando1":
        this.numeroArray.push(digito);
        /**A função parseFloat() - analisa um argumento string e retorna um número de ponto flutuante. */
        /**.join - Adiciona todos os elementos de um array em uma string, separados pela string separadora especificada. */
        op1 = parseFloat(this.numeroArray.join(""));
        this.display();
        break;
      case "operando2":
        this.numeroArray.push(digito);
        op2 = parseFloat(this.numeroArray.join(""));
        this.display();
    }
  },
};