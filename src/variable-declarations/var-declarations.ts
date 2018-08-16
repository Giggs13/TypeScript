/* ------------------------------------------------------------------------------------------------------------------ */
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
console.log(f);
console.log(f.toString());
console.log(f());
console.log(f().toString());
console.log(f()());
console.log(g);
console.log(g.toString());
console.log(g());
console.log(`
`);

/* ------------------------------------------------------------------------------------------------------------------ */
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}

console.log(`
`);

for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}

/* ------------------------------------------------------------------------------------------------------------------ */
