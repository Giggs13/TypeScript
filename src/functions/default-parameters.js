function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    return firstName + ' ' + lastName;
}
var result1 = buildName('Bob'); // works correctly now, returns "Bob Smith"
var result2 = buildName('Bob', undefined); // still works, also returns "Bob Smith"
// error, too many parameters
// let result3 = buildName('Bob', 'Adams', 'Sr.');
var result4 = buildName('Bob', 'Adams');
console.log(result1, '|', result2, '|', result4);
