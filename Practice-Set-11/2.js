
//average of 3 numbers in an array using spread-operator:


function average(n1,n2,n3)
{
    return (n1+n2+n3)/3;
}

let arr=[1,2,3];

console.log("The average is : "+average(...arr)+".");

