function isUnique(string){
  if(string.length > 128){
    return false;
  }
  let characterSet ={}
  for(let i = 0 ; i < string.length ; i++){
    let value = string[i];
    if (characterSet[value]){
      return false;
    }else{
      characterSet[value] = true;
    }
    console.log(characterSet);
  }
  return true;
}

isUnique('1243539075624');