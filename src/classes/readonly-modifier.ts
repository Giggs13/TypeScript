/*
Readonly properties must be initialized at their declaration or in the constructor.
*/
class Octopus {

    readonly name: string;
    readonly numberOfLegs: number = 8;

    constructor(theName: string, readonly alias = 'papa') {
        this.name = theName;
    }
}

let dad = new Octopus('Man with the 8 strong legs');
console.log(dad.name);
console.log(dad.numberOfLegs);
console.log(dad.alias);
// error! name is readonly.
// dad.name = 'Man with the 3-piece suit';
