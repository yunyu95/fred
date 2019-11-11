class FurredAnimal {
    name: string;  //ha proprietà name
    constructor(name: string) {  //passo parametro name
        this.name = name;  // proprietà this.name assume valore del parametro name
    }
    brush(): string {  //definisco il metodo brush
        return "I am brushing " + this.name;  //ritorna il return quando la funzione brush viene chiamata
    }
}

class Dog extends FurredAnimal {
    race: string;
    constructor(name: string, race: string) { // deve esserci sempre il costruttore
        super(name); // richiamo il costruttore della classe madre, da fare nella prima riga
        this.race = race;  // proprietà this.race assume valore del parametro race
    }
    brush(): string {  // override del metodo brush
        return super.brush() + ' of race ' + this.race;  // super.metodo() -> fa riferimento al metodo delle classi superiori
    }
}

class Cat extends FurredAnimal {
    breed: string;//race: string; nelle sottoclassi le proprietà devono avere nomi diversi
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
    brush(): string {
        return super.brush() + ' of race ' + this.breed;
    }
}

let vect: Animal[] = [new Dog('Spike', 'dog'), new Cat('Tom', 'cat')]; //animali è un vettore di oggetti

vect.forEach((animale) => { console.log(animale.brush()); });  // considero ogni oggetto di animale e applico a ogni oggetto il metodo brush

