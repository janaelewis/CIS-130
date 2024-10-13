/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Janae Lewis
      Date:   6/10/2024

      Filename: project02-02.js
 */

 
function verifyForm() {
      var name = document.getElementById("nameinput").value;
      var email = document.getElementById("emailinput").value;
      var phone = document.getElementById("phoneinput").value;
      (name && email && phone) ? window.alert("Thank you!") : window.alert("Please fill in all fields");
}
document.getElementById("submit").addEventListener("click", verifyForm, false);

