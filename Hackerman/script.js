async function display() {
  let promises = [
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Initialising Hacking Program....");
      }, 1000);
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hacking Cape Of Infinity twitter....");
      }, 3000);
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("infinity_c_1 found !!!");
      }, 5000);
    }),
    new Promise((resolve, reject) => {  
      setTimeout(() => {
        resolve("You are hacked 💀");
      }, 7000);
    }),
  ];
  
  function loader(element,messageDiv){
    let index = 0;
    const loadInterval = setInterval(()=>{
      if(index< element.length)
      {
        messageDiv.textContent+=element.charAt(index);
        index++;
      }else{
        clearInterval(loadInterval);
      }
    },50);
  }

  const divs = Array.from(document.querySelectorAll(".result"));

  for (let i = 0; i < promises.length; i++) {
    const result = await promises[i];
    loader(result,divs[i]);
  }
}

display();


