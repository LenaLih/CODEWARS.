// Что, если нам нужно добавить длину слов, разделенных пробелом, в конце того же слова и вернуть ее в виде массива?

// Пример (Ввод -> Выход)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
function addLength(str) {
   return str.split(' ').map(v => `${v} ${v.length}`);
}