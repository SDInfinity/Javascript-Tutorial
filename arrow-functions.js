 
 const a =  () =>{
    console.log("Hello 1.");
 }

const b = () => console.log( "Hello 2.");

const c = name => console.log(name+".");

a(),b(),c("Sougata");


//'this':
///<i> Inside an object , inside a fucntion using 'function' keyword: 'this' refers to that object.
//<ii> Alone , 'this' refers to the global object.
//<iii> Inside an event , 'this' refers to the element that receives the event.
//But by using an arrow function , inside an event 'this' refers to the 'this' in it's parent lexical environment.

const x = {
    name: "Harry",
    role: "J.S Developer",
    show: function(){
        console.log(this); //refers to the object x.
        // let that = this; //we can skip this line by using an arrow function , in which 'this' refers to the 
        //'this' taken from it's parent lexical environment.
        setTimeout(()=>{
            console.log(`${this.name} , ${this.role} .`);
        },2000);

    }
}

x.show();

