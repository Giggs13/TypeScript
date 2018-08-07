interface Person {
    firstName: string;
    lastName: string;
}

function greeterI(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let userI = { firstName: "Jane", lastName: "User!" };

document.body.innerHTML = greeterI(userI);
