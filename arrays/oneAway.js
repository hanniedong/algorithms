function oneAway(stringOne, stringTwo){
  if(stringOne.length == stringTwo.length) return sameLength(stringOne,stringTwo);
  if(stringOne.length > stringTwo.length - 1) return stringTwoShorter(stringOne,stringTwo);
  if(stringOne.length < stringTwo.length + 1) return stringTwoLonger(stringOne,stringTwo);
  else return false;
}

function sameLength(stringOne, stringTwo){
  for (i = 0; i < stringOne.length; i++){
    if(stringOne[i] !== stringTwo[i])return false;
  }
}

function stringTwoShorter(stringOne, stringTwo){
  indexOne = 0;
  indexTwo = 0;
  counter = 0;
  while (indexOne <= stringOne.length){
    if(stringOne[indexOne] !== stringTwo[indexTwo]){
      indexOne++;
      counter++
      console.log(counter);
    }else{
      indexOne++;
      indexTwo++;
    }
  }
  if (counter > 1) return false; else return true ;
}
