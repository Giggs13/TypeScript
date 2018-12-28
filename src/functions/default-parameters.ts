function buildName(firstName: string, lastName = 'Smith') {
    return firstName + ' ' + lastName;
}

let result1 = buildName('Bob');                  // works correctly now, returns "Bob Smith"
let result2 = buildName('Bob', undefined);       // still works, also returns "Bob Smith"
// error, too many parameters
// let result3 = buildName('Bob', 'Adams', 'Sr.');
let result4 = buildName('Bob', 'Adams');
console.log(result1, '|', result2, '|', result4);
