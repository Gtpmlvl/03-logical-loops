'use strict';
console.log('grupe.js');

let zmoniuSk = 15;

let atsakymas;

if (zmoniuSk === 0) {
  atsakymas = 'ne grupe';
} else if (zmoniuSk === 1) {
  atsakymas = 'solo';
} else if (zmoniuSk === 2) {
  atsakymas = 'duetas';
} else if (zmoniuSk === 3) {
  atsakymas = 'trio';
} else if (zmoniuSk === 4) {
  atsakymas = 'kvartetas';
} else {
  atsakymas = 'Didele grupe';
}

console.log(atsakymas);

// switch (true) {
//   case 5 > 4:
//     console.log('5 daugiau uz 4');
// }