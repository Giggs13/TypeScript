/* ------------------------------------------------------------------------------------------------------------------ */
/*
object is a type that represents the non-primitive type, i.e. any thing that is not number, string, boolean, symbol, null, or undefined.
*/
function create(o) {
    return console.log(o);
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
create(undefined); // Error
/* ------------------------------------------------------------------------------------------------------------------ */
