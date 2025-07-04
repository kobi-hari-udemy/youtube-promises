export function getDelayedNumber() {
  return new Promise<number>((res) => 
    setTimeout(() => res(42), 3000));
}

export function go() {
  console.log("Here we go...");
  const p = getDelayedNumber();
}
