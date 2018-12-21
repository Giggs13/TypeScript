/*
Readonly properties must be initialized at their declaration or in the constructor.
*/
var Octopus = /** @class */ (function () {
    function Octopus(theName, alias) {
        if (alias === void 0) { alias = 'papa'; }
        this.alias = alias;
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs');
console.log(dad.name);
console.log(dad.numberOfLegs);
console.log(dad.alias);
// error! name is readonly.
// dad.name = 'Man with the 3-piece suit';
