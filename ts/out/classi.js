class Animals {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    eat() {
        this.weight += 1;
    }
    toString() {
        return 'Nome:' + this.name + ' Peso:' + this.weight;
    }
}
class Mammal extends Animals {
    constructor(name, weight, energy) {
        super(name, weight);
        this.energy = energy;
    }
    eat() {
        super.eat();
        this.energy += 1;
    }
    toString() {
        return super.toString() + ' Energia:' + this.energy;
    }
}
class Reptilian extends Animals {
    constructor(name, weight, temperature) {
        super(name, weight);
        this.temperature = temperature;
    }
    eat() {
        super.eat();
        this.temperature += 1;
    }
    toString() {
        return super.toString() + ' Temperatura:' + this.temperature;
    }
}
function f(as) {
    as.forEach(a => { a.eat(); });
    as.forEach(a => { console.log(a.toString()); });
}
let as = [new Mammal('Elephant', 500, 30), new Reptilian('Lizard', 10, 10)];
f(as);
//# sourceMappingURL=classi.js.map