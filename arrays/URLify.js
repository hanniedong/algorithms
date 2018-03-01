
function URLify(string) {
  return string.trim().replace(/\s/g, '%20');
}

URLify("Mr  John Smith  ")