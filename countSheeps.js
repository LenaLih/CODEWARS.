function countSheeps(sheep) {
   return Array.isArray(sheep) ? sheep.filter(Boolean).length : 0;
 }