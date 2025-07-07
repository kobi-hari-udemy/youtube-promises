export function getDelayedNumber() {
  return new Promise<number>((res) => 
    setTimeout(() => res(42), 3000));
}

function go() {
  console.log("go-1");
  start();
  console.log("go-2");
}

async function start() {
  console.log("start-1");
  const p = getDelayedNumber();
  console.log("start-2");
  const res = await p;
  console.log("start-3");
}