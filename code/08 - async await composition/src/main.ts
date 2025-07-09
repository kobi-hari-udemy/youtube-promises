function getDelayedNumber() {
  return new Promise<number>((res) => 
    setTimeout(() => res(42), 2000));
}

function getDelayedString() {
  return new Promise<string>((res) => 
    setTimeout(() => res('hello'), 3000));
}

function getDelayedError() {
  return new Promise<boolean>((_, rej) => 
    setTimeout(() => rej('OOPS!'), 4000));
}


function go() {
  console.log('Starting...');
  let p1 = getDelayedNumber();

  p1.then(res => res * 5)
    .then(res => getDelayedString())
    .catch(err => console.warn('OOps'))
    .finally(() => console.log('And were done'))



  // let p2 = p1.finally(() => {
  //   console.log('Promise Finalized');
  //   return getDelayedString();
  // })
}

