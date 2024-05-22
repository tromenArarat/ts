// Tipos Básicos 1
var age = 20;
var cadena = 'sa';
var isSenior = true;
var person = {};
var almacen = [{ sal: "fina" }, { azucar: "mascabo" }, {}];
// Tratar de evitar el uso de any
var response = "holaa";
response = 20;
response = true;
response = ["Hola", 123];
response = { name: "Tomás" };
// Tipos básicos II
// void, no retorna nada
function saludar() {
    console.log("Buenas");
}
;
// unknown
var response2;
response2 = true;
// if(response2['2'].fill){} 
// no deja completar con métodos 
// porque no sabe qué tipo de dato es
// con any esto no pasa
// unknown es más controlado pero menos poderoso
// null
var response3 = null;
// undefined
var response4 = undefined;
// undefined es que no fue inicializada, 
// null es que no está disponible o está vacía
// Combinación de Tipos
var response5;
// el ? indica que si es undefined no ejecute el toString
response5 === null || response5 === void 0 ? void 0 : response5.toString();
var responseProducts;
var responsePartners;
responsePartners === null || responsePartners === void 0 ? void 0 : responsePartners.toString().concat("");
