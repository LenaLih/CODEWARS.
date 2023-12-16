// Создайте метод, который принимает список и элемент и возвращает true, если элемент принадлежит списку, в противном случае false.
function include(arr, item){
   for (let i = 0; i < arr.length; i ++) {
   if (arr[i] === item) {
     return true;
   }}
   return false;
 }