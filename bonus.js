
function bonusTime(salary, bonus) { return bonus ? ("£" + salary * 10) : "£" + salary;}

// Создайте функцию, которая принимает два аргумента (зарплата, премия). Зарплата будет целым числом, а премия — логическим.

// Если бонус — правда, зарплату следует умножить на 10. Если бонус — ложь, то толстосум не заработал достаточно денег и должен получить только свою заявленную зарплату.

// Возвращает общую сумму, которую получит пользователь, в виде строки с префиксом «£» (= "\u00A3"