const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    //after the script is loaded resolve with source.
    script.onload = () => {
      resolve(src);
    };
    document.head.append(script);
  });
};

async function call() {
  let a = await loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  );
  console.log(a);
  alert(a);
}

call();

//using .then():

// let loadScript=async (src)=>{
//     return new Promise((resolve,reject)=>{
//         let script=document.createElement('script');
//         script.src=src;
//         script.onload=()=>{
//             resolve(src);
//         }
//         document.head.append(script);
//     })
// }

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");

// a.then((value)=>
// {
//     console.log(value);
//     alert(value);
// })
