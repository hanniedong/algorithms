//need to count the number of repeated letters in a string 
//use counter to count

function stringCompression(string){
  let compressedString = '';
  let counter = 1;
  let i = 0;
  compressedString += string[i]
  
  for(let i = 1; i < string.length; i++){
    if(string[i -1] !== string[i] && counter == 1){
      compressedString += string[i];
    }
   if(string[i-1] == string[i]) {
      counter++;
    }
    if(string[i - 1] !== string[i] && counter !== 1 ){
      compressedString += counter;
      compressedString += string[i];
      counter = 1;
    }
    if (i == (string.length - 1)){
      compressedString += counter;
    }
  }
  if (compressedString.length > string.length) return string; else return compressedString;
}

stringCompression('werwerwer')
