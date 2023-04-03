 
class railwayForm{

    constructor(name,train_no,mobile)
    {
        this.name=name;
        this.train_no=train_no;
        this.mobile=mobile;
    }

    submit(){
        console.log(" Form Submitted details are: "+"Name: "+this.name+" Train Number: "+this.train_no+" Mobile Number:  "+this.mobile+".");
    }

    cancel(){
        console.log(" Form Cancelled for "+this.name+".");
    }

}

let capeForm = new railwayForm("Cape",545378,44444455555);


let harryForm = new railwayForm("Harry",0,0);



harryForm.cancel();

capeForm.submit();

