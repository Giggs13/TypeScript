/*
We have a StringArray interface that has an index signature.
This index signature states that when a StringArray is indexed with a number, it will return a string.
*/
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];
console.log(myArray['1']);

let myStr: string = myArray[0];

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ['Alice', 'Bob'];
console.log(myArray2['0']);
/*
Index signature in type 'ReadonlyStringArray' only permits reading.
*/
// myArray2[2] = "Mallory";

/*
An index signature parameter type must be 'string' or 'number'.
*/

/*
interface ObjectArray {
    readonly [index: object]: string;
}
*/

interface Parent {
    [index: string]: string;

    gender: string;
}

let obj: Parent = {gender: 'male'};
obj['name'] = 'Andrej';
obj['age'] = '32';
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);
