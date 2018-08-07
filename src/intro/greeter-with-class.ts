class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeterC(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let userC = new Student("Jane", "M.", "User");

document.body.innerHTML = greeterC(userC);