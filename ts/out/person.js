class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return this.first + ' ' + this.last;
    }
    set fullName(name) {
        let buffer = name.split(' ');
        this.first = buffer[0];
        this.last = buffer[1];
    }
    fullInfo() {
        return this.first + ' ' + this.last;
    }
    static merge(p1, p2) {
        return new Person(p1.first + p2.first, p1.last + p2.last);
    }
}
let p = new Person('Tom', 'Jones');
let persons = [new Person('a', 'b'), new Person('c', 'd')];
persons.forEach((x) => { console.log(x); });
let tom = new Person('Tom', 'Jones');
let bob = new Person('Bob', 'Hope');
console.log(Person.merge(tom, bob).fullName);
//# sourceMappingURL=person.js.map