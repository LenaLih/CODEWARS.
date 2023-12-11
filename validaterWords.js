// Напишите простую функцию, проверяющую, содержит ли строка слово «привет» на разных языках.
function validateHello(greetings) {
   res =  /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings) 
   return res
 }