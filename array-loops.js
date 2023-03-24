let num=[1,2,3,4,5];
for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
}
console.log("\n");
num.forEach((number)=>
{
    console.log (number*number);
})

let name="Cruzz";
let arr=Array.from(name);
console.log(arr);
console.log("\n");
for(let i in num)
{
    console.log(i);
}
console.log("\n");
for(let item of num)
{
    console.log(item);
}

