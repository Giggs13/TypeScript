function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    return firstName;
}

let result1 = buildName('Bob');
// error, too many parameters
// let result2 = buildName('Bob', 'Adams', 'Sr.');
let result3 = buildName('Bob', 'Adams');
console.log(result1, '|', result3);
