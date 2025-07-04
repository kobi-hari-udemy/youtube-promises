function getDelayedNumber() {
  return new Promise((res) => 
    setTimeout(() => res(42), 3000));
}

function go() {
  console.log("Here we go...");
  const pr = getDelayedNumber();
  pr.then(res => {
    console.log("Promise completed with result:", res);
  });
  console.log("Waiting for the promise to resolve...");
}
