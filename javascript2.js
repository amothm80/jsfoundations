let add7 = number => number+7;
let multiply = (a,b) => a*b;
let capitalize = function(word){
  word = word.toLowerCase();
  return word[0].toUpperCase() + word.slice(1);
}
let lastletter = function(word){
  return word.charAt(word.length-1);
}