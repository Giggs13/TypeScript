/* ------------------------------------------------------------------------------------------------------------------ */
let someValue: any = "this is a string";

// “angle-bracket” syntax
let strLength: number = (<string>someValue).length;
console.log(strLength);
// as-syntax
let strLength_: number = (someValue as string).length;
console.log(strLength_);

/* ------------------------------------------------------------------------------------------------------------------ */
