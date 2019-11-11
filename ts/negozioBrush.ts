class Animal {
    name: string;
    constructor(name: string) {
        this.name = name; 
    }
    brush(): string { 
        return "I am brushing " + this.name; 
    }
}

class Cane extends Animal {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    brush(): string {
        return super.brush() + ' of race ' + this.race;
    }
}

class Gatto extends Animal {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    brush(): string {
        return super.brush() + ' of race ' + this.race;
    }
}

let animali = [new Cane('Spike', 'dog'), new Gatto('Tom', 'cat')];

animali.forEach((animale) => { console.log(animale.brush()); });

