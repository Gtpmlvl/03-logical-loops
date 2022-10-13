'use strict';
console.log('lyginis.js');

let sk = 458710;

if (sk % 2 === 0) {
  // lyginis
  console.log(sk, 'lyginis');
} else {
  console.log(sk, 'nelyginis');
}

console.log(sk, `${sk % 2 === 0 ? '' : 'ne'}lyginis`);
console.log(sk, sk % 2 === 0 ? 'lyginis' : 'nelyginis');