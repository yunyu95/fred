class Animals {
    name: string;
    weight: number;
    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }
    eat() {
        this.weight += 1;
    }
    toString(): string {
        return 'Nome:' + this.name + ' Peso:' + this.weight;
    }
}

class Mammal extends Animals {
    energy: number;
    constructor(name: string, weight: number, energy: number) {
        super(name, weight);
        this.energy = energy;
    }
    eat() {
        super.eat();
        this.energy += 1;
    }
    toString(): string {
        return super.toString() + ' Energia:' + this.energy;
    }
}

class Reptilian extends Animals {
    temperature: number;
    constructor(name: string, weight: number, temperature: number) {
        super(name, weight);
        this.temperature = temperature;
    }
    eat() {
        super.eat();
        this.temperature += 1;
    }
    toString(): string {
        return super.toString() + ' Temperatura:' + this.temperature;
    }
}

function f(as: Animals[]) {
    as.forEach(a => { a.eat(); });
    as.forEach(a => { console.log(a.toString()) });
}

let as: Animals[] = [new Mammal('Elephant', 500, 30), new Reptilian('Lizard', 10, 10)];

f(as);
