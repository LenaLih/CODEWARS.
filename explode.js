function explode(x) {
   if (typeof x[0] === 'number' && typeof x[1] === 'number') {
  let sum = x[0] + x[1];
  return Array.from({ length: sum }, () => x);
} 
else if (typeof x[0] === 'number' || typeof x[1] === 'number') {
   let num = typeof x[0] === 'number' ? x[0] : x[1];
   return Array.from({ length: num }, () => x);
} 
else {
   return 'Void!';
}
}