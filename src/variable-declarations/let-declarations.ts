/* ------------------------------------------------------------------------------------------------------------------ */
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(`within the loop with let: `, i);
    }, 100 * i);
}

/* ------------------------------------------------------------------------------------------------------------------ */
function foo() {
    return p;
}

// illegal call 'foo' before 'p' is declared. runtimes should throw an error here.
console.log(`foo()`, foo());

//++p;
let p: number = 7;
console.log(`foo()`, foo());

function ff(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    //return b;
}

/* ------------------------------------------------------------------------------------------------------------------ */
