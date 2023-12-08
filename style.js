// DESCRIPTION:
// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
function remainder(n, m){
   let larger = Math.max(n, m);
   let smalle = Math.min(n, m);
   let quotient = larger % smalle;
   return (Math.trunc(quotient));
 }
//  Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
function sumOfDifferences(arr) {
  if (arr.length < 2) {
    return 0;
 }
     arrS = arr.sort(function(a,b){return a-b;});
     return arrS[arrS.length - 1] - arrS[0];  
 
     
}