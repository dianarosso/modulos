var somar = require("./modulos/somar");
var media = require("./modulos/media");
var divisao = require("./modulos/divisao");
var multi = require("./modulos/multi");
var mensagem = require("./modulos/mensagem");
var nome = "Diana ";
var msg = " oieeeeeeeeeeee";

console.log("A soma de x e y é: " + somar(45,30));
console.log("A média de x e y é: " + media(12,18));
console.log("O quociente de x e y é: " + divisao(47,25));
console.log("O produto de x e y é: " + multi(87,34));
console.log(mensagem(nome, msg));
