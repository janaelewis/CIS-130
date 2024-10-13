/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Janae Lewis
      Date:   10/10/2024

      Filename: project02-04.js
 */
 




// Function to display a numeric value as a text string in the format $##.## 

 const CHICKEN_PRICE = 10.95;
 const HALIBUT_PRICE = 13.95;
 const BURGER_PRICE = 9.95;
 const SALMON_PRICE = 18.95;
 const SALAD_PRICE = 7.95;
 const SALES_TAX = 0.07;

 document.getElementById("chicken").addEventListener("click", calcTotal);
 document.getElementById("halibut").addEventListener("click", calcTotal);
 document.getElementById("burger").addEventListener("click", calcTotal);
 document.getElementById("salmon").addEventListener("click", calcTotal);
 document.getElementById("salad").addEventListener("click", calcTotal);
 function calcTotal() {
    let cost = 0;
    let buyChicken = document.getElementsById("chicken").checked
    let buyHalibu = document.getElementsById("halibut").checked
    let buyBurger = document.getElementsById("burger").checked
    let buySalmon = document.getElementsById("salmon").checked
    let buySalad = document.getElementsById("salad").checked

    cost += buyChicken ? CHICKEN_PRICE : 0;
    cost += buyHalibu ? HALIBUT_PRICE : 0;
    cost += buyBurger ? BURGER_PRICE : 0;
    cost += buySalmon ? SALMON_PRICE : 0;
    cost += buySalad ? SALAD_PRICE : 0;

    document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
    let tax = cost * SALES_TAX;
    document.getElementById("foodTax").innerHTML = formatCurrency(tax);
    let totalCost = cost + tax;
    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

 }
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
