'use strict';
console.log('car.js');

/*
Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else (arba switch), kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
BMW group priklauso: BMW, Mini, Rolls-Royce.
*/

let car = 'Lamborghini';

switch (car) {
  case 'VW':
  case 'Audi':
  case 'Bentley':
  case 'Bugatti':
  case 'Lamborghini':
  case 'Porsche':
    console.log('VW group priklauso');
    break;
  case 'BMW':
  case 'Mini':
  case 'Rolls-Royce':
    console.log('BMW group priklauso');
    break;
  default:
    console.log('Nepriklauso nei vienam');
}

// if (
//   car === 'VW' ||
//   car === 'Audi' ||
//   car === 'Bentley' ||
//   car === 'Bugatti' ||
//   car === 'Lamborghini' ||
//   car === 'Porsche'
// ) {
//   console.log('VW group priklauso');
// } else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
//   console.log('BMW group priklauso');
// } else {
//   console.log('Nepriklauso nei vienam');
// }