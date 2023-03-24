//The Node.js file system module allows you to work with the file system on your computer.
//using node js method fs.readFile()

const fs= require('fs')

fs.readFile("mom.txt","utf-8",function(err,data)  //takes the location,encoding and a callback
{
    if(err)
    {
        console.log(err)
    }else{
        console.log(data)
    }
});



//synchrounous version
// const fs = require('fs');

// try {
//   const data = fs.readFileSync('mom.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }
