function isItLetter(character) {
   const regex = /^\p{L}$/u;
//   const regex = /^[a-z]$/i;
return regex.test(character);
}