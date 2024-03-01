function multiply(n) {
   if (n === 0) return 0;
   const sign = n < 0 ? 1 : 1;
   const power = Math.abs(n).toString().length;
   return sign * n * Math.pow(5, power);
 }
