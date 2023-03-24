let name="Cruzz";


console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(1,3));
console.log(name.slice(2));
console.log(name.replace('C','B'));
let part="in life";
console.log(name.concat(" wants to succeed "+part));

let name1="    Cruzz     ";
console.log(name1.trim());

//Strings are immutable 

//to get a specific character of a string

console.log(name[0]+" "+name[1]);

for(let i=0;i<name.length;i++)
{
    console.log(name[i]);
}
console.log("\n");
for(let i of name)
{
    console.log(i);
}
let sentence1="The quick brown fox";

console.log((sentence1.includes("fox")? "yes":"no"));
console.log((sentence1.startsWith("The")?"yes":"no"));
console.log((sentence1.endsWith("The")?"yes":"no"));