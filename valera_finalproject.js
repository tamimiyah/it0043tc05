document.getElementById('sendButton').addEventListener('click', function () {
  
  var name = document.querySelector('input[placeholder="Enter your name"]').value;
  var email = document.querySelector('input[placeholder="Enter your email"]').value;
  var message = document.querySelector('input[placeholder="Enter your message"]').value;

  
  if (name && email && message) {
    alert('Message Sent!');
  } else {
    alert('Please fill out all fields before sending.');
  }
});
