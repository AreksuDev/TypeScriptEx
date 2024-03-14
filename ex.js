// Hola mundo
/*
Ejercicio práctio TypeScript
*/
var saludo = "Hola mundo";
console.log(saludo);
var myString = "Esto es una cadena de texto";
//myString = 6    Error
console.log(typeof myString);
var myNumber = 5;
console.log(myNumber);
console.log(myString + " " + myNumber);
console.log(myNumber + 2);
var myNumber2 = 6.3;
console.log(myNumber + myNumber2);
var myBool = false;
console.log(myBool);
console.log(typeof myBool);
var myUndefined;
// myUndefined = 1 Error
console.log(myUndefined);
// Constantes
var myConst = "Mi constante";
//myConst = "Mi nueva constante"  Error
console.log(myConst);
// Controles de flujo
if (myNumber == 10 || myNumber2 == 10) {
    console.log("El valor es 10");
}
else if (myNumber == 5 && myNumber2 == 6.3) {
    console.log("El valor es 5");
}
else {
    console.log("El valor no es 5 ni 10");
}
// Funciones
function myFunctionVoid() {
    console.log("Mi función void");
}
function myFunction() {
    return "Mi función string";
}
function sumTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
myFunctionVoid();
console.log(myFunction());
console.log(sumTwoNumbers(5, 9.8));
// Array 
var myArray = []; // Array sólo de string
var myArray2 = []; // Array de string o números
myArray2.push("Hola", 2);
console.log("Arrary ----->" + myArray2);
var gameBoard = [
    ["X", "O", null],
    ["O", null, "O"],
    ["X", null, "O"]
];
gameBoard[0][1] = "X";
var rgb = [255, 255, 0];
//rgb.push(4) // Aunque las tuplas son de tamaño fijo esto lo permite.
//               Para evitarlo se pone readonly al tipo de la tupla y evitar así que se añadan valores,
//               pero también que se editen los que ya tiene
// Listas
var myList = ["Nombre", "Apellidos"];
console.log(myList);
var mySet = new Set(["Nombre", "Apellidos", "Nombre"]);
mySet.add("4");
console.log(mySet);
// Mapas
var myMap = new Map([[1, "Nombre"], [1, "Apellidos"]]);
myMap.set(3, "Edad");
console.log(myMap.get(1));
// Bucles
console.log("Bucle for ---------");
for (var _i = 0, myList_1 = myList; _i < myList_1.length; _i++) {
    var value = myList_1[_i];
    console.log(value);
}
console.log("Bucle forEach ----------");
mySet.forEach(function (value) {
    console.log(value);
});
console.log("Bucle while ----------");
var myCounter = 0;
while (myCounter < myList.length) {
    console.log(myList[myCounter]);
    myCounter++;
}
var hexadecimalColor = "#ff0000";
// Clases
var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    return MyClass;
}());
var myClass = new MyClass("Alejandro", 32);
console.log(myClass);
console.log(myClass.name);
// Enum
var MyEnum;
(function (MyEnum) {
    MyEnum["DART"] = "dart";
    MyEnum["PYTHON"] = "python";
    MyEnum["SWIFT"] = "swift";
    MyEnum["JAVA"] = "java";
    MyEnum["KOTLIN"] = "kotlin";
    MyEnum["JAVASCRIPT"] = "javasrcipt";
})(MyEnum || (MyEnum = {}));
var myEnum = MyEnum.JAVA;
console.log(myEnum);
function mostrarMensaje(tipoDeError) {
    if (tipoDeError === "notFound" /* ERROR_TYPES.NOT_FOUND */) {
        console.log("No se encuentra el recurso");
    }
    else if (tipoDeError === "unathorized" /* ERROR_TYPES.UNATHORIZED */) {
        console.log("No tienes permisos para acceder");
    }
    else if (tipoDeError === "forbidden" /* ERROR_TYPES.FORBIDDEN */) {
        console.log("No tienes permisos para acceder");
    }
}
// Aserciones de tipos
var canvas = document.getElementById('canvas'); // as HTMLCanvasElement
// TypeScript no sabe que el elemento que le pasas es un <canvas>
// Devuelve null si no lo encuentra
// HTMLElement si sí lo encuentra
// HTMLCanvasElement es lo que necesitamos por eso se añade -> as HTMLCanvasElement
// pero al hacer esto se pierde el hecho de indicarle que puede ser null
// por lo cual es mejor hacer la aserción hacer después de la comprobación de null
//  "const ctx = (canvas as HTMLCanvasElement).getContext('2d')"
// pero tampoco podemos fiarnos de que lo que le hemos pasado sea realmente un canvas
// por lo que conviene comprobarlo con instanceof HTMLCanvasElement
// al hacer esto TypeScript ya sabe que lo que se le pasa es un canvas, por lo que tampoco es necesario ya
// (canvas as HTMLCanvasElement)
// es inferencia -> TypeScript se da cuenta que dentro del if ya sólo el canvas va apoder ser un HTMLCanvasElement
if ( /*canvas != null &&*/canvas instanceof HTMLCanvasElement) {
    var ctx = canvas.getContext('2d');
}
var heroe1 = {
    id: 1,
    name: "Thor",
    age: 30,
    saludar: function () {
        console.log("Hola");
    }
};
var carrito = {
    totalPrice: 100,
    productos: [
        {
            id: 1,
            nombre: "Producto 1",
            precio: 10,
            cantidad: 3,
            talla: 37
        },
        {
            id: 2,
            nombre: "Producto 2",
            precio: 7,
            cantidad: 1
        }
    ]
};
// Narrowing
function mostrarLongitud(objeto) {
    if (typeof objeto === "string") {
        return objeto.length;
    }
    return objeto.toString().length;
}
mostrarLongitud(1);
