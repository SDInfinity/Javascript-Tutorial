
//static methods can be used throughout: 

class Animal{
    constructor(name)
    {
        this.name=name;
    }

    walk(){
        console.log(`${this.name} can walk. `);
    }

    static capitalise(name)
    {
        return name.charAt(0).toUpperCase() + name.slice(1,name.length);
    }
}

let animal = new Animal(Animal.capitalise("sony"));

animal.walk();