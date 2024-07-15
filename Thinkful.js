function updateLight(current) {

   //  if(current === "green") {
   //    return "yellow";
   //  } if (current === "yellow") {
   //    return "red";
   //  } else (current === "red") 
   //    return "green";

   const lights = {
      green: 'yellow',
      yellow: 'red',
      red: 'green'
   };
   return lights[current];
}