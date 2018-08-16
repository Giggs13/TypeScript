/* ------------------------------------------------------------------------------------------------------------------ */
let input = [1, 2, 7, '5', 3];
let [first, second, ...rest] = input;
let [, third, , fifth, , seventynth] = input;
console.log(input);
console.log(first);
console.log(second);
console.log(rest);
console.log(third, ' ', fifth, ' ', seventynth);
console.log(`
`);

// swap variables
[first, second] = [second, first];
console.log(first);
console.log(second);
console.log(`
`);

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}

f([1, 2]);
/* ------------------------------------------------------------------------------------------------------------------ */
