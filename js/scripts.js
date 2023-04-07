/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Define a function to increment the visitor count
function incrementVisitorCount() {
  // Make an AJAX request to a PHP script that increments the count
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'increment-count.php', true);
  xhr.send();
}

// Call the incrementVisitorCount function when the page loads
window.onload = incrementVisitorCount;
