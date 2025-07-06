function getDelayedNumber() {
  return new Promise((res) => setTimeout(() => res(42), 3000));
}

function throwDelayedError() {
  return new Promise((_, rej) => setTimeout(() => rej("OOPS!"), 3000));
}

function go() {
  console.log("Here we go...");
  const pr = getDelayedNumber();


  pr.then((res) => {
    console.log("Promise completed with result:", res);
  });

    pr.finally(() => {
    console.log("This will always run, regardless of the promise outcome.");
  });

  console.log("Waiting for the promise to resolve...");
}
