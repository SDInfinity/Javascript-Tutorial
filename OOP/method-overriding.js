
class Employee{
    login(){
        console.log("Employee has logged in.");
    }
    requestLeaves(leaves)
    {
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee{
    //making changes in the requestLeaves and copying it as it is using super keyword
    requestLeaves(leaves){
        super.requestLeaves(4)
    console.log("One extra leave granted."); //from Employee class.
    }
    
}

let e = new Programmer("Cape");

e.login();
e.requestLeaves(3);