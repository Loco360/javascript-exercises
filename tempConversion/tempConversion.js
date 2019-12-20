const ftoc = function(fahrenheit) {
  
  let f1 = (fahrenheit - 32) * 5/9;
  let rounded = Math.round(f1 * 10) / 10;
  return rounded

}

const ctof = function(celsius) {
  let c1 = (celsius * 9/5) + 32;
  let rounded = Math.round(c1 * 10) / 10;
  return rounded;
}

/* Solution
var ftoc = function(f) {
  return Math.round((f - 32) * (5/9) * 10) / 10
 }
 
 var ctof = function(c) {
   return Math.round(((c * 9/5) + 32) * 10) / 10 
 }*/


module.exports = {
  ftoc,
  ctof
}
