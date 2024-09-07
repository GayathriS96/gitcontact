document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Gather form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
  
    // Display a loading message while processing
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerText = "Submitting your form...";
  
    // Fetch request to send the form data
    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Show success message
      confirmationMessage.innerText = "Form submitted successfully!";
      
      // Reset the form after submission
      document.getElementById('contactForm').reset();
    })
    .catch(error => {
      // Display error message
      confirmationMessage.innerText = "There was an error submitting the form. Please try again.";
      console.error('Error:', error);
    });
  });