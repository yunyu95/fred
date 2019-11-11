class FurredAnimal {
    constructor(name) {
        this.name = name;
    }
    fullInfo() {
        return this.name;
    }
    brush() {
        return "I am brushing " + this.name;
    }
}
class Dog extends FurredAnimal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    brush() {
        return super.brush() + ' of race ' + this.race;
    }
}
class Cat extends FurredAnimal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    brush() {
        return super.brush() + ' of race ' + this.race;
    }
}
let animali = [new Dog('Spike', 'dog'), new Cat('Tom', 'cat')];
animali.forEach((animali) => { console.log(animali.brush()); });
//# sourceMappingURL=furredAnimal.js.map