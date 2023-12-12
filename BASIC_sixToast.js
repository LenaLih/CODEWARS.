// Вы должны вернуть количество тостов, которое вам нужно положить (или вынуть). В случае, если 5вы все еще можете положить 1тост:
function sixToast(num) {
   let getToast = 6;
   let result = num - getToast;
      if  (num < getToast) {
    result = (getToast - num);
   }
    return result;
 }