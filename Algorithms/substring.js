
// function check(str){
//     if(str.charAt(0)==str.charAt(str.length-1)){
//         return true;
//     }
//     return false;
// }


// function countSubstring(str)
// {
//    let count=0;
//     for (let i=0;i<str.length;i++){
//         for(let j=i;j<str.length;j++)
//         {
//             if(check(str.substring(i,j+1)))
//             {
//                 count++;
//             }
//             console.log(str.substring(i,j+1)+" ");
//         }
//     }
//     return count;
// }

// console.log(countSubstring("abcab"));

//The above approach takes O(n^2)

//Optimised approach using frequency array:


function count(str){
    //using array constructor:
    let array = new Array(26).fill(0);
    let result=0;
    for(let i=0;i<str.length;i++)
    {
        array[str.charAt(i).charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    
    for(let j=0;j<26;j++)
    {
        result+=array[j]*(array[j]+1)/2;
    }
    return result;
}

console.log(count("abcab"));