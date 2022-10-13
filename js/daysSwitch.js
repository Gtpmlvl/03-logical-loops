'use strict';
console.log('daysElse.js');

let day = 50;

switch (day) {
  case 1:
    // jei salyga lygu 1
    console.log('Pirmadienis');
    // nebetikrina toliau
    break;
  case 2:
    console.log('Antradienis');
    break;
  case 3:
    console.log('Treciadienis');
    break;
  case 4:
    console.log('Ketvirtadienis');
    break;
  case 5:
    console.log('Penktadienis');
    break;
  case 6:
  case 7:
    console.log('Savaitgalis');
    break;
  default:
    console.log('ne darbo diena');
}