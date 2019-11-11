class FurredAnimal {
    constructor(name) {
        this.name = name; // proprietà this.name assume valore del parametro name
    }
    brush() {
        return "I am brushing " + this.name; //ritorna il return quando la funzione brush viene chiamata
    }
}
class Dog extends FurredAnimal {
    constructor(name, race) {
        super(name); // richiamo il costruttore della classe madre, da fare nella prima riga
        this.race = race; // proprietà this.race assume valore del parametro race
    }
    brush() {
        return super.brush() + ' of race ' + this.race; // super.metodo() -> fa riferimento al metodo delle classi superiori
    }
}
class Cat extends FurredAnimal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    brush() {
        return super.brush() + ' of race ' + this.breed;
    }
}
let vect = [new Dog('Spike', 'dog'), new Cat('Tom', 'cat')]; //animali è un vettore di oggetti
vect.forEach((animale) => { console.log(animale.brush()); }); // considero ogni oggetto di animale e applico a ogni oggetto il metodo brush
//# sourceMappingURL=furredAnimal.js.map