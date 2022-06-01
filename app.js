var readline = require('readline-sync');

const caesarCipherPrompt = () => {
    var input = readline.question('What phrase would you like to encrypt? \n').toUpperCase();
    var shift = parseInt(readline.question('How many letters would you like to shift? \n'));
    console.log(caesarCipher(input, shift));
}

const caesarCipher=(input, shift) => {
    var alph= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result ='';
    while(input.length>0) {
        for (let i=0;i<=25;i++){ 
            if ((alph[i]===input[0]) && (i>shift)) {result = result + alph[i-shift];};
            if ((alph[i]===input[0]) && (i<shift)) {result = result + alph[i+shift] ;} ;
        };
        if (!  /^[A-Z]*$/.test(input[0])) {
            result = result+ input[0];
        }; 
    input=input.substring(1);
   };   
  return result;          
};

caesarCipherPrompt()