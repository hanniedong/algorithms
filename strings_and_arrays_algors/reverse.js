function reverse(string){
  let reversedString = ""
  for(i = string.length - 1 ; i > -1; i--){
    if(/[a-zA-Z]+/g.test(string[i])){
      reversedString += string[i];
      console.log(string[i])
    }
  }
  return reversedString;
}

reverse("hannie")