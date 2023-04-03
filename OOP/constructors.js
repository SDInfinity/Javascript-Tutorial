 
class railwayForm{

    constructor(name)
    {
        this.name=name;
    }

    submit(){
        console.log(this.name+" Form Submitted.");
    }

    cancel(){
        console.log(this.name+" Form Cancelled.");
    }

}

let capeForm = new railwayForm("Cape");


let harryForm = new railwayForm("Harry");



harryForm.cancel();

capeForm.submit();

