// Дан массив, содержащий ровно 5 строк "a", "b"или "c"( chars в Java, characters в Fortran), и проверьте, содержит ли массив три и два одинаковых значения.

// Примеры
function checkThreeAndTwo(array) {
   const counts = {};
   for (let i = 0; i < array.length; i++) {
      counts[array[i]] = (counts[array[i]] || 0) + 1;
   }
   const values = Object.values(counts);
   return values.includes(3) && values.includes(2);
}