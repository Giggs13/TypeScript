/* Boolean */
let isDone: boolean = false;
console.log(isDone);
/* Number */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal, hex, binary, octal);
/* String */
let colorString: string = "blue";
colorString = 'red';
console.log(colorString);

let fullName = `Andrej Malykhin`;
let age: number;
age = 32;
let sentence = `Hello, my name is ${ fullName }.

I'm ${ age } years old now. I'll be ${ ++age } years old in 4 months!`
console.log(sentence);
/* Array */
let listOfNumbers: number[][] = [[9, 4, 6], [7, 4, 6]];
console.log(listOfNumbers);
let listOfObjects: Object[] = [1, '3', {prop: true}];
console.log(listOfObjects);
let list: Array<boolean> = [true, true, false];
console.log(list);
/* Tuple */
let x: [string, Array<boolean>];
x = ["hello", [true, false]];
console.log(x);
console.log(x[0].substr(-5));
console.log(x[1].join('`').substring(4));

x[7] = "world"; // OK, 'string' can be assigned to 'string | Array<boolean>'
console.log(x[7].toString()); // OK, 'string' and 'Array<boolean>' both have 'toString'
console.log(x);

/* Enum */
enum Color {Red, Green, Blue}

let color: Color = Color.Green;
console.log(Color);
console.log(Color.Blue.valueOf());
console.log(color);
//
enum Colors {Red = 13, Green = -2, Blue = 44}

let oneOfColors: Colors = Colors.Green;
console.log(Colors);
//
enum Colored {Red = 1, Green, Blue}

let colorValue: Colored = Colored.Green;
let colorName: string = Colored[2];
let colorValueNumber: number = Colored.Green;
console.log(colorValue);
console.log(colorName);
console.log(colorValueNumber);