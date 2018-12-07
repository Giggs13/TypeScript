var p1 = { x: 10, y: 20 };
// p1.x = 5;   TS2540: Cannot assign to 'x' because it is a constant or a read-only property.
console.log('----------------------------   ReadonlyArray<T>   -------------------------------');
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12;
// ro.push(5);
