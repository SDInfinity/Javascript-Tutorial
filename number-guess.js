const readline=require('readline-sync');
let  random_number=Math.floor(Math.random()*100+1);
let n;
let count=-1;
while(random_number!==n && count<=100)
{
    n=Number(readline.question("Enter the number: "));
    if(random_number>n)
    console.log("Number guessed is less");
    else if(random_number<n)
    console.log("Number guessed is greater");
    else{
        console.log("Number guessed is right");
    }
    count++;
}
let score =100-count;
console.log("Actual Number: "+n);
console.log("Score: "+score);
