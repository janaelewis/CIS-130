/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Janae Lewis
      Date:   10/10/2024

      Filename: project02-03.js
 */
      document.getElementById("square").addEventListener("mouseover", function() {
        document.getElementById("feedback").innerHTML = "You're hovering over the square";
    });
    
    document.getElementById("square").addEventListener("mouseout", function() {
        document.getElementById("feedback").innerHTML = "";
    });
    
    // Attach onmouseover and onmouseout event handlers to the element with the id "triangle"
    document.getElementById("triangle").addEventListener("mouseover", function() {
        document.getElementById("feedback").innerHTML = "You're hovering over the triangle";
    });
    
    document.getElementById("triangle").addEventListener("mouseout", function() {
        document.getElementById("feedback").innerHTML = "";
    });
    
    // Attach onmouseover and onmouseout event handlers to the element with the id "circle"
    document.getElementById("circle").addEventListener("mouseover", function() {
        document.getElementById("feedback").innerHTML = "You're hovering over the circle";
    });
    
    document.getElementById("circle").addEventListener("mouseout", function() {
        document.getElementById("feedback").innerHTML = "";
    });
