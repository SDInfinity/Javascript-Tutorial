
class Complex{
    //a constructor that initialises an instance with a real and an imaginary part.
    constructor(real,complex)
    {
        this._real=real;
        this._complex=complex;
    }

    //getter to get the real and complex part

    get real(){
        return this._real;
    }

    get complex(){
        return this._complex;
    }

    //setter methods to set the real and complex part

    set real(newReal)
    {
        this._real=newReal;
    }

    set complex(newComplex)
    {
        this._complex=newComplex;
    }

    static add(n1,n2)
    {
        return `${n1.real+n2.real} + ${n1.complex+n2.complex}i`;  
    }
}

let c1 = new  Complex(0,0);
let c2 = new Complex(0,0);

console.log(`Before setting real and complex part of c1: ${c1.real}+${c1.complex}i.`);

c1.real=5;
c1.complex=7;

c2.real=7;
c2.complex=-2;


console.log(`After setting real and imaginary part of c1 \: ${c1.real}+${c1.complex}i`);

let c3 = Complex.add(c1,c2);

console.log("The complex number after addition is : "+c3+".");
