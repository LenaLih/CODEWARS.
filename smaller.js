// function smaller(nums) {
  
// }
const smaller = nums => nums.map((num, i) => nums.slice(i + 1).filter(x => x < num).length);

// Напишите функцию, которая для заданного массива arrвозвращает массив, содержащий в каждом индексе iколичество чисел, которые меньше, чем arr[i]справа.