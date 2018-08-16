/* ------------------------------------------------------------------------------------------------------------------ */
let notSure: any = 4;
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);
notSure = {la: `${ notSure } always`};
console.log(notSure);

/* ------------------------------------------------------------------------------------------------------------------ */
/*
let notSure_: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
*/

/* ------------------------------------------------------------------------------------------------------------------ */

let list: any[] = [1, true, "free"];

list[1] = 100;
console.log(list);

/* ------------------------------------------------------------------------------------------------------------------ */
