async function rejected() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Error"));
    }, 3000);
  });
}

async function call() {
  try {
    let a = await rejected();
    console.log(a);
  } catch (error) {
    console.log("Error is handled");
  }
}

call();
