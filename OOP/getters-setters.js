
class Animal{
    constructor(name)
    {
        this._name=name;
    }
    get name()
    {
        return this._name;
    }
    
    set name(newName)
    {
        this._name=newName;
    }
}

let animal =new Animal("Chicken")

//we can now directly access/log the name:
//before setting name
console.log(animal.name+".");
animal.name = "Dog";
//after setting name
console.log(animal.name+".");

//instanceOf operator to check wether an obj belongs to a certain class or not.

console.log(animal instanceof Animal);