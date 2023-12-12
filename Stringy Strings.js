// напишите мне функцию stringy, которая принимает sizeи возвращает stringчередующиеся 1s и 0s.

// строка должна начинаться с 1.

// строка с size6 должна возвращать : '101010'.

// с size4 должно вернуться: '1010'.

// с size12 должно вернуться: '101010101010'.
function stringy(size) {
   // your code here  
  let result = '';
   for (let i = 1; i <= size; i++) {
     result += i % 2;
   }
   return result;
 }