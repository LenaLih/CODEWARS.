function getLargerNumbers(a, b) {
   return a.map((n, i) => Math.max(n, b[i]));
   
  }
 // const getLargerNumbers = (a, b) => a.map((num, i) => Math.max(num, b[i]));

//  Целью этого ката является сравнение каждой пары целых чисел из двух массивов и возврат нового массива больших чисел.

// Примечание: Оба массива имеют одинаковые размеры.