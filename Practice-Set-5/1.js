const readline = require('readline-sync');
let num=[];
let data;
while(true){
    data=Number(readline.question("enter data"));
    if(data===0)
    {
        break;
    }
    num.push(data);
}
console.log(num);
