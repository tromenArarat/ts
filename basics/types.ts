// Tipos Básicos 1

let age: number=20;
let cadena: string ='sa';
let isSenior:boolean = true;
let person:Object={};
let almacen:Object[]=[{sal:"fina"},{azucar:"mascabo"},{}];


// Tratar de evitar el uso de any
let response: any = "holaa";
response = 20;
response = true;
response = ["Hola",123];
response = {name: "Tomás"};

// Tipos básicos II

// void, no retorna nada
function saludar(): void{
    console.log("Buenas");
};

// unknown
let response2: unknown;
response2 = true;
// if(response2['2'].fill){} 
// no deja completar con métodos 
// porque no sabe qué tipo de dato es
// con any esto no pasa
// unknown es más controlado pero menos poderoso

// null
let response3 = null;

// undefined
let response4 = undefined;

// undefined es que no fue inicializada, 
// null es que no está disponible o está vacía


// Combinación de Tipos

let response5 : number | undefined;
// el ? indica que si es undefined no ejecute el toString
response5?.toString();

// Escribir nuestros propios tipos de datos
type ResponseTypeService = number | undefined;

let responseProducts: ResponseTypeService;
let responsePartners: ResponseTypeService;

responsePartners?.toString().concat("");