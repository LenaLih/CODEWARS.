// Завершите функцию, которая возвращает день недели в соответствии с введенным номером:

// 1возвращает"Sunday"
// 2возвращает"Monday"
// 3возвращает"Tuesday"
// 4возвращает"Wednesday"
// 5возвращает"Thursday"
// 6возвращает"Friday"
// 7возвращает"Saturday"
// В противном случае возвращается"Wrong, please enter a number between 1 and 7"
function whatday(num) { 
   switch(num) {
       case 1:
         return 'Sunday';
       case 2:
         return 'Monday';
       case 3:
         return 'Tuesday';
       case 4:
         return 'Wednesday';
       case 5:
         return 'Thursday';
       case 6:
         return 'Friday';
       case 7:
         return 'Saturday';
       default:
         return "Wrong, please enter a number between 1 and 7";
   }
 }