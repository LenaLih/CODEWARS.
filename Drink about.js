// Создайте функцию, которая получает возраст и возвращает то, что они пьют.

// Правила:

// Дети до 14 лет.
// Подростки до 18 лет.
// Молодой до 21 года.
// У взрослых их 21 и более.
function peopleWithAgeDrink(old) {
   if (old <= 13) {
     return 'drink toddy';
  }
   else if (old <= 17) {
     return 'drink coke';
  }
   else if (old <= 20) {
     return 'drink beer';
  }
   else if (old >= 21) {
     return 'drink whisky';
  }
 };