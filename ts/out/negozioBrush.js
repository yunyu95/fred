class Animal {
    constructor(name) {
        this.name = name;
    }
    brush() {
        return "I am brushing " + this.name;
    }
}
class Cane extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    brush() {
        return super.brush() + ' of race ' + this.race;
    }
}
class Gatto extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    brush() {
        return super.brush() + ' of race ' + this.race;
    }
}
let animali = [new Cane('Spike', 'dog'), new Gatto('Tom', 'cat')];
animali.forEach((animale) => { console.log(animale.brush()); });
//# sourceMappingURL=negozioBrush.js.map