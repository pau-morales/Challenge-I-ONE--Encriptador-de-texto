
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var buttonEncriptar = document.querySelector("#button-encriptar");
var buttonDesencriptar = document.querySelector("#button-desencriptar");
var input = document.querySelector("#area");
var messageNotFound = document.querySelector(".aside__title");
var insertText = document.querySelector(".aside__paragraph");
var imageCharacter = document.querySelector(".character-image");
var newText = document.querySelector("#desencriptar-texto");
var buttonCopy = document.querySelector("#button-copy");
var messageCopied = document.querySelector("#message-copied");
var alertError = document.querySelector("#mensaje-error");

let copyMessage = "<p style='color: green'>¡Texto copiado!</p>"
let errorMessage = "ERROR! Sin mayúsculas, acentos, ni caracteres especiales!"

var alfabeto = "abcdefghijklmnñopqrstuvwxyz";
var transposicion = "zyxwvutsrqpoñnmlkjihgfedcba";

  

buttonEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  ok(input.value, alfabeto);
  encriptar(input.value, alfabeto, transposicion);
  input.value = "";
});

buttonDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  ok(input.value, alfabeto);
  desencriptar(input.value, alfabeto, transposicion);
  input.value = "";
  /*
  MostrarOcultarTexto();
  var desencriptado = document.querySelector("#new-text");
  desencriptado.value = decodificado;*/
});


buttonCopy.addEventListener("click", function (event) {
  event.preventDefault();

  copiar();
});
