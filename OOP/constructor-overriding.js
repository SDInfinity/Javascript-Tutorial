
class Employee{
    constructor(name){    //gets called automatically
        console.log(`${name} Employee constructor called.`);
        this.name=name;
    }
    login(){
        console.log("Employee has logged in.");
    }
    requestLeaves(leaves)
    {
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee{
    // constructor(){  //by default this is implemented.
    //     super();
    // }
    //super ' keyword' has to be defined and 'this' can be defined after super. 
    //making changes in the requestLeaves using super keyword.
    requestLeaves(leaves){
        super.requestLeaves(4)
    console.log("One extra leave granted."); //from Employee class.
    }
    
}
 
let e = new Programmer("Cape");

e.login();
e.requestLeaves(3);