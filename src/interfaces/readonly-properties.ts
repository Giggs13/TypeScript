interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 10, y: 20};
// p1.x = 5;   TS2540: Cannot assign to 'x' because it is a constant or a read-only property.

console.log('----------------------------   ReadonlyArray<T>   -------------------------------');
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12;
// ro.push(5);
