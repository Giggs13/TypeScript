function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    return firstName;
}
var result1 = buildName('Bob');
// error, too many parameters
// let result2 = buildName('Bob', 'Adams', 'Sr.');
var result3 = buildName('Bob', 'Adams');
console.log(result1, '|', result3);
