function chineseZodiac(year){
   const animal = animals[(year - 1924) % 12];
   const element = elements[Math.floor((year - 1924) / 2) % 5];
   return `${element} ${animal}`;

   // Если задан год, верните элемент и животное, которые представляет этот год («Элемент Животное»). Например, я родился в 1998 году, поэтому я «Земляной Тигр».