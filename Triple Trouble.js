// Тройная проблема
// Создайте функцию, которая будет возвращать строку, объединяющую все буквы трех введенных строк в группы. Взяв первую букву всех входных данных и сгруппировав их рядом друг с другом. Сделайте это для каждой буквы, см. пример ниже!

// Например, ввод: «aa», «bb», «cc» => вывод: «abcabc»
function tripleTrouble(one, two, three){
   let combined = '';
   for (let i = 0; i < one.length; i++) {
     combined += one.charAt(i) + two.charAt(i) + three.charAt(i);
 
   }
   return combined;
  }
 