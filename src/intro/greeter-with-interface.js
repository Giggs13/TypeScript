function greeterI(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var userI = { firstName: "Jane", lastName: "User!" };
document.body.innerHTML = greeterI(userI);
