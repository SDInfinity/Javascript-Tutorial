const obj={
    Harry: 98,
    Cruzz: 99,
    Simon: 100
};

for(let i=0;i<Object.keys(obj).length;i++){
    console.log("The marks of "+Object.keys(obj)[i]+" are "+obj[Object.keys(obj)[i]]);
}