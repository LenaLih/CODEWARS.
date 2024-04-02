function countPositivesSumNegatives(input) {
   return input && input.length ? [
         input.filter(x => x > 0).length,
         input.reduce((acc, val) => val < 0 ? acc + val : acc, 0)
     ] : [];
 }