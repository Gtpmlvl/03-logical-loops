'use strict';
console.log('terenary.js');

let sentence = '';
let name = 'Mike';
let town = 'Kaunas';
/*  
sukurti kintamji isStudent (boolean), sukurti kintamaji Name - irasom varda. sukurti town ir irasysim miesta. 
norim sugeneruoti sakini kintamajame sentence. 
<vardas> gyvena <miestas> ir studijuoja/ ir dirba
James gyvena London ir studijuoja
Mike gyvena Kaunas ir dirba
*/

let isStudent = false;
let dirbaArStudijuoja = isStudent ? 'studijuoja' : 'dirba';

// if (isStudent === true) {
//   dirbaArStudijuoja = 'studijuoja';
// } else {
//   dirbaArStudijuoja = 'dirba';
// }
// isStudent === true ? (dirbaArStudijuoja = 'studijuoja') : (dirbaArStudijuoja = 'dirba');

// sentence = `${name} gyvena ${town} ir ${dirbaArStudijuoja}`;
sentence = `${name} gyvena ${town} ir ${isStudent ? 'studijuoja' : 'dirba'}`;

console.log(sentence);

if (isStudent === true) {
  // true
} else {
  // false
}

// terenary

// <Salyga> ? true : false ;

// ternary uzduotis

// // sukurti kintamanji is isLoggedIn (boolean)
// let isLoggedIn = true;
// let message = `You are currently${isLoggedIn ? '' : ' not'} logged in to the System`;
// // message = 'You are currently not logged in to the System';
// console.log(message);


// let grupe =2;


// if(grupe <= 0 ) {
//   console.log('ne grupe');
// }else if(grupe === 1 ){
//   console.log('solo');
// }else if(grupe ===2){
//   console.log('duetas');
// }
// else if(grupe ===3){
//   console.log('trio');
// }
// else if(grupe ===4){
//   console.log('kvartetas');
// } else if (grupe > 4) {
//   console.log('didele grupe')
// }


let num = 0;

switch(num){
  case 0:
    console.log('nera')
    break;
  case 1:
    console.log('solo')   
    }
  




// let number = 2;

// if(number % 2===0) {
//   console.log('Lyginis')
// } else  {
//   console.log('nelyginis')
// }



 


let result = Math.floor(Math.random()*5+1)

if(result ===1) {
  console.log('pirmadienis')
}else if(result ===2) {
  console.log('antradeniis')
}else if(result ===3){
  console.log('treciadienis')
}
else if(result ===4){
  console.log('ketvirtadienis')
}
else if(result ===5){
  console.log('penktaddienis')
}



let vardas = 'ingridautas'
length = vardas.length 


if(vardas.length > 5){
  console.log('ilgas')
  
}else{
  console.log('trumpas')
}


let clientAge = 17
let legalAge = 18

if(clientAge >= legalAge){
  console.log('Can drive')
} else{
  console.log('cant drive')
}










