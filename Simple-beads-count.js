// Реализуйте count_red_beads(n) Javascript так, чтобы он возвращал количество красных бусин.
// Если синих бусин меньше 2, верните 0.
function countRedBeads(n) {
   if (n < 2) {
      return 0;
   }
   return (n - 1) * 2;
}