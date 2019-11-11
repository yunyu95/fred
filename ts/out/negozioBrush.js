class Animal {
    constructor(name) {
        this.name = name;
    }
    fullInfo() {
        return this.name;
    }
}
class Cane extends Animal {
    constructor(name) {
        super(name);
    }
    brush() {
        return this.name + ' is brushable';
    }
}
class Gatto extends Animal {
    constructor(name) {
        super(name);
    }
    brush() {
        return this.name + ' is brushable';
    }
}
class Toy {
    constructor(name) {
        this.name = name;
    }
    fullInfo() {
        return this.name;
    }
}
class TeddyBear extends Toy {
    constructor(name) {
        super(name);
    }
    brush() {
        return this.name + ' is not brushable';
    }
}
class Barbie extends Toy {
    constructor(name) {
        super(name);
    }
    brush() {
        return this.name + ' is not brushable';
    }
}
let ars = [new Cane('Dog'), new Gatto('Cat'), new TeddyBear('TeddyBear'), new Barbie('Barbie')];
ars.forEach((x) => { console.log(x.brush()); });
//# sourceMappingURL=negozioBrush.js.map