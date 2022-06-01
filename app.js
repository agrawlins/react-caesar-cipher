var readline = require('readline-sync');

const caesarCipherPrompt = () => {
    var input = readline.question('What phrase would you like to encrypt? \n').toUpperCase();
    var shift = parseInt(readline.question('How many letters would you like to shift? \n'));
   console.log(caesarCipher(input, shift));
}

// const caesarCipher = (input, shift) => {
//     const inputing = input;
//   for(var i = 0; i < input.length; i++) {
//     var temp = input.charAt(i);
//     if(temp !== " " || temp!== "!" || temp!== "?") {
//        inputing += inputing.fromCharCode(shift + inputing.prototype.charCodeAt(temp));
//     } else {
//       inputing += temp;
//     }
//   }
  
//   return inputing;
// }
//     const charCode = input.map.charCodeAt();
//     return inputing.fromCharCode(((charCode + shift) <= 90) ? charCode + shift: (charCode + shift) % 90 + 64);  
// }

const caesarCipher=(input, shift) =>
{
    var alph= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result ='';
    while(input.length>0)
  {

  for (let i=0;i<=25;i++)
     { 
       if ((alph[i]===input[0]) && (i>shift)) {result = result + alph[i-shift];};
       if ((alph[i]===input[0]) && (i<shift)) {result = result + alph[i+shift] ;} ;
      };
 if (!  /^[A-Z]*$/.test(input[0]) ) {result = result+ input[0];}; 
input=input.substring(1);
   };   
  return result;          
};

caesarCipherPrompt()