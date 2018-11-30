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

function f([first1, second1]: [number, number]) {
    console.log(first1);
    console.log(second1);
}

f([1, 2]);
console.log('------------------------------------------------------------------------------------------------------------------');

let o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
let {a: aa, b: bb}: { a: string, b: number } = o;
let {a, ...passthrough} = o;
let total = passthrough.b + passthrough.c.length;
console.log(a);
console.log(passthrough);
console.log(total);
console.log('-------------------------------------------- Default values ---------------------------------------------------------');

type C = { h: string, g?: number };
function keepWholeObject(wholeObject: { h: string, g?: number }) {
    const {h, g = 1001} = wholeObject;
}
