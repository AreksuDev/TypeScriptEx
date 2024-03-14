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

// Array 
let myArray: string[] = []  // Array sólo de string
let myArray2: (string | number)[] = []  // Array de string o números
myArray2.push("Hola", 2)
console.log("Arrary ----->" + myArray2)
    // Array bidimensional
type CellValue = "X" | "O" | null
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]
const gameBoard : GameBoard = [
    ["X", "O", null],
    ["O", null, "O"],
    ["X", null, "O"]
]
gameBoard[0][1] = "X"

// Tupla ( Arrays fijos en tamaño)
type RGB =  readonly[number, number, number]
const rgb: RGB = [255, 255, 0]

//rgb.push(4) // Aunque las tuplas son de tamaño fijo esto lo permite.
//               Para evitarlo se pone readonly al tipo de la tupla y evitar así que se añadan valores,
//               pero también que se editen los que ya tiene

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

// template Union Type

type Color = `#${string}`  
const hexadecimalColor: Color = "#ff0000"

// Clases

class MyClass {
    readonly id?: `${string}-${string}-${string}-${string}`     // El interrogante ? indica que es opcional
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

// Se introduce en una constante para que al compilar a JS no cree código innecesario extra
// Es preferible utilizar siempre la opción de const
// Pero no se debe usar al crear una librería o componente que se consumirá en el exterior de la aplicación
const enum ERROR_TYPES {  
    NOT_FOUND = "notFound",
    UNATHORIZED = "unathorized",
    FORBIDDEN = "forbidden"
}

function mostrarMensaje (tipoDeError: ERROR_TYPES) {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
        console.log("No se encuentra el recurso")
    } else if (tipoDeError === ERROR_TYPES.UNATHORIZED){
        console.log("No tienes permisos para acceder")
    } else if (tipoDeError === ERROR_TYPES.FORBIDDEN){
        console.log("No tienes permisos para acceder")
    } 
}

// Aserciones de tipos
const canvas = document.getElementById('canvas') // as HTMLCanvasElement

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

if (/*canvas != null &&*/ canvas instanceof HTMLCanvasElement){
    const ctx = canvas.getContext('2d')
}

// Interfaces

interface Hero {
    id: number
    name: string
    age: number
    saludar: () => void
}

const heroe1: Hero = {
    id: 1,
    name: "Thor",
    age: 30,
    saludar() {
        console.log("Hola")
    }
}

interface Producto {
    id: number
    nombre: string
    precio: number
    cantidad: number
}

interface Zapatilla extends Producto {
    talla: number
}

interface CarritoDeCompras {
    totalPrice: number
    productos:  (Producto | Zapatilla)[]
}

interface CarritoOps {
    add(product: Producto): void,
    remove(id:number): void,
    clear(): void
}

const carrito: CarritoDeCompras = {
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
}

// Narrowing

function mostrarLongitud (objeto: number | string) {
    if (typeof objeto === "string"){
        return objeto.length
    }
    return objeto.toString().length
}
mostrarLongitud(1)