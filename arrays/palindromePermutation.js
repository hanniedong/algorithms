function palindromePermutation(string){
  modifiedString = string.toLowerCase();
  let hash = {};
  for (let i = 0; i < modifiedString.length; i++){
    if(!hash[modifiedString[i]]){
      hash[modifiedString[i]] = 1;
    }else{
      hash[modifiedString[i]]++
    }
  }
    console.log(hash)
    let count = 0;
    for (var key in hash){
      if(hash[key] % 2 !== 0) count++
      if (count > 1) return false;
    }
    return true;
}

palindromePermutation('Tacocat')