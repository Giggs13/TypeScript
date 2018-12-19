interface SquareConfig {
    color?: string;
    width?: number;
    // [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return {color: '', area: 0};
}

/*
Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'.

However, a better approach might be to add a string index signature if you’re sure that the object can have some extra properties that are
used in some special way.
*/
// let mySquare1 = createSquare({colour: 'red', width: 100});
let mySquare2 = createSquare({width: 100, opacity: 0.5} as SquareConfig);

/*
One final way to get around these checks, which might be a bit surprising, is to assign the object to another variable:
Since squareOptions won’t undergo excess property checks, the compiler won’t give you an error.
*/
let squareOptions = {colour: 'red', width: 100};
let mySquare3 = createSquare(squareOptions);
