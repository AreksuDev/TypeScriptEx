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
