var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a;
/* ------------------------------------------------------------------------------------------------------------------ */
var input = [1, 2, 7, '5', 3];
var first = input[0], second = input[1], rest = input.slice(2);
var third = input[1], fifth = input[3], seventynth = input[5];
console.log(input);
console.log(first);
console.log(second);
console.log(rest);
console.log(third, ' ', fifth, ' ', seventynth);
console.log("\n");
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
console.log(first);
console.log(second);
console.log("\n");
function f(_a) {
    var first1 = _a[0], second1 = _a[1];
    console.log(first1);
    console.log(second1);
}
f([1, 2]);
console.log('------------------------------------------------------------------------------------------------------------------');
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
var aa = o.a, bb = o.b;
var a = o.a, passthrough = __rest(o, ["a"]);
var total = passthrough.b + passthrough.c.length;
console.log(a);
console.log(passthrough);
console.log(total);
console.log('-------------------------------------------- Default values ---------------------------------------------------------');
function keepWholeObject(wholeObject) {
    var h = wholeObject.h, _a = wholeObject.g, g = _a === void 0 ? 1001 : _a;
}
