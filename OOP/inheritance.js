

class Animal{
    constructor(type)
    {
        this.type=type;
    }
}

class Monkey extends Animal{
    jump(){
        console.log("Can jump from branch to branch. ");
    }

    Type(){

        console.log("Monkey is a "+this.type+".");
    }
}

let chimp = new Monkey("Mammal");

chimp.Type();
chimp.jump();

