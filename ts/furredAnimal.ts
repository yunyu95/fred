class FurredAnimal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    fullInfo(): string {
        return this.name;
    }
    brush(): string {
        return "I am brushing " + this.name;
    }
}

class Dog extends FurredAnimal {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    brush(): string {
        return super.brush() + ' of race ' + this.race;
    }
}

class Cat extends FurredAnimal {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    brush(): string {
        return super.brush() + ' of race ' + this.race;
    }
}

let animali = [new Dog('Spike', 'dog'), new Cat('Tom', 'cat')];

animali.forEach((animali) => { console.log(animali.brush()); });

