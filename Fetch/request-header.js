//request-header using async-await.

//2 functions created using async-await , that take options as parameters => request-headers, get TODO function takes custom id as parameter

//and returns a response  .

import fetch from 'isomorphic-fetch';

const put = async (options) => {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1",
    options
  );

  let r = await response.json();

  return r;
};

async function getTodo(id, options) {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + id,
    options
  );
  let r = await response.json();
  return r;
}

async function call() {
  let options = {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "Cape Of Infinity",
      body: "Death Entropy Darkseid 💀",
      userId: 999999,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  let res = await put(options);
  console.log(res);

  let todo = await getTodo(5, options);
  console.log(todo);
}

call();

//same stuff using .then
// fetch()
//       .then((response)=>{
//         console.log(response.status);
//         console.log(response.ok);
//         return response.json();
//       }).then((data)=>{
//         console.log(data);
//       }).catch((error)=>{
//         console.log(error);
//       });
