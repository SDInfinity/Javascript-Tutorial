

class Human{

    human(){
        console.log("I am a human.");
    }
}

class Student extends Human{
    human(){
        super.human()    
         console.log("I am also a student.");
    }
}

let s1 = new Student();

s1.human();

console.log(s1 instanceof Human);