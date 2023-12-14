// Реализуйте String#digit?(на Java StringUtils.isDigit(String)), который должен возвращать значение true, если данный объект является цифрой (0-9), falseв противном случае.
String.prototype.digit = function() {
   return /^\d$/.test(this);
 };
  