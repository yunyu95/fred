interface Brushable {
    brush(): string;
}

class Animal {
    name: string;
    constructor(name: String) {
        this.name = name;
    }
    fullInfo(): string {
        return this.name;
    }
}

class Cane extends Animal implements Brushable {
    constructor(name: string) {
        super(name);
    }
    brush(): string {
        return this.name + ' is brushable';
    }
}

class Gatto extends Animal implements Brushable {
    constructor(name: string) {
        super(name);
    }
    brush(): string {
        return this.name + ' is brushable';
    }
}

class Toy {
    name: string;
    constructor(name: String) {
        this.name = name;
    }
    fullInfo(): string {
        return this.name;
    }
}

class TeddyBear extends Toy implements Brushable {
    constructor(name: string) {
        super(name);
    }
    brush(): string {
        return this.name + ' is not brushable';
    }
}

class Barbie extends Toy implements Brushable {
    constructor(name: string) {
        super(name);
    }
    brush(): string {
        return this.name + ' is not brushable';
    }
}


let ars: Brushable[] = [new Cane('Dog'), new Gatto('Cat'),new TeddyBear('TeddyBear'), new Barbie('Barbie')]


ars.forEach((x) => { console.log(x.brush()); });

