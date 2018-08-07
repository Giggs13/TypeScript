var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeterC(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var userC = new Student("Jane", "M.", "User");
document.body.innerHTML = greeterC(userC);
