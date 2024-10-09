/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Janae Lewis     
      Date:   10/7/24

      Filename: project02-01.js
 */



   
function FahrenheitToCelsius(degree) {
    return Math.round((degree - 32) / 1.8);
 }
 function CelsiusToFahrenheit(degree) {
    return Math.round((degree * 1.8) + 32);
 }
 
 document.getElementById('cValue').onchange = function() {
    let cDegree = (document.getElementById('cValue').value);
    document.getElementById('fValue').value = CelsiusToFahrenheit (cDegree)
 }
 document.getElementById('fValue').onchange = function() {
    let fDegree = (document.getElementById('fValue').value);
    document.getElementById('cValue').value = FahrenheitToCelsius (fDegree) 
}