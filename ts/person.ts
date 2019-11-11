class Person {
    first: string;
    last: string;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return this.first + ' ' + this.last;
    }
    set fullName(name: string) {
        let buffer = name.split(' ');
        this.first = buffer[0];
        this.last = buffer[1];
    }
    fullInfo(): string {
        return this.first + ' ' + this.last;
    }
    static merge(p1: Person, p2: Person) {
        return new Person(p1.first + p2.first, p1.last + p2.last)
    }
}

let p: Person = new Person('Tom', 'Jones');
let persons = [new Person('a', 'b'), new Person('c', 'd')];

persons.forEach((x) => { console.log(x); });

let tom = new Person('Tom', 'Jones');
let bob = new Person('Bob', 'Hope');

console.log(Person.merge(tom, bob).fullName);