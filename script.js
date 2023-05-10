document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.getElementById("greeting");
  
    // Get the current hour
    const date = new Date();
    const hour = date.getHours();
  
    // Set the greeting based on the current hour
    if (hour >= 5 && hour < 12) {
      greeting.innerText = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      greeting.innerText = "Good Afternoon";
    } else {
      greeting.innerText = "Good Evening";
    }
  });
  