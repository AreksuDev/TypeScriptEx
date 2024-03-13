// Hola mundo

/*
Ejercicio práctio TypeScript
*/

let saludo: string = "Hola mundo";
console.log(saludo)

var myString: string = "Esto es una cadena de texto"
//myString = 6    Error
console.log(typeof myString)

let myNumber = 5
console.log(myNumber)

console.log(myString + " " + myNumber)
console.log(myNumber + 2)
let myNumber2: number = 6.3
console.log(myNumber + myNumber2)

let myBool: boolean = false
console.log(myBool)
console.log(typeof myBool)

let myUndefined: undefined
// myUndefined = 1 Error
console.log(myUndefined)

// Constantes
const myConst = "Mi constante"
//myConst = "Mi nueva constante"  Error
console.log(myConst)

// Controles de flujo
if (myNumber == 10 || myNumber2 == 10){
    console.log("El valor es 10")
} else if (myNumber == 5 && myNumber2 == 6.3){
    console.log("El valor es 5")
} else {
    console.log("El valor no es 5 ni 10")
}

// Funciones
function myFunctionVoid(): void {
    console.log("Mi función void")
}

function myFunction(): string {
    return "Mi función string"
}

function sumTwoNumbers(firstNumber: number, secondNumber: number): number{
    return firstNumber + secondNumber
}
myFunctionVoid()
console.log(myFunction())
console.log(sumTwoNumbers(5,9.8))

// Listas
let myList : Array<string> = ["Nombre", "Apellidos"]
console.log(myList)

let mySet: Set<string> = new Set(["Nombre", "Apellidos", "Nombre"])
mySet.add("4")
console.log(mySet)

// Mapas
let myMap: Map<number, string> = new Map([[1 , "Nombre"], [1, "Apellidos"]])
myMap.set(3, "Edad")
console.log(myMap.get(1))

// Bucles
console.log("Bucle for ---------")
for (const value of myList){
    console.log(value)
}
console.log("Bucle forEach ----------")
mySet.forEach(function (value) {
    console.log(value)
})

console.log("Bucle while ----------")
let myCounter = 0
while (myCounter < myList.length){
    console.log(myList[myCounter])
    myCounter++
}

// Clases

class MyClass {
    name: string
    age: number

    constructor (name: string, age: number){
        this.name = name
        this.age = age
    }
}

let myClass: MyClass = new MyClass("Alejandro", 32)
console.log(myClass)
console.log(myClass.name)

// Enum
enum MyEnum {
    DART = "dart",
    PYTHON = "python",
    SWIFT = "swift",
    JAVA ="java",
    KOTLIN = "kotlin",
    JAVASCRIPT = "javasrcipt"
}

const myEnum = MyEnum.JAVA
console.log(myEnum)