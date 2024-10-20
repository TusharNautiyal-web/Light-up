document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form_container');
    const submitButton = form.querySelector('button[type="submit"]');
    
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      if (validateForm()) {
        submitForm();
      }
    });
  });
  
  function validateForm() {
    const firstName = document.querySelector('input[name="firstname"]').value.trim();
    const lastName = document.querySelector('input[name="lastname"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();
  
    let isValid = true;
    let errorMessage = '';
  
    if (!firstName) {
      isValid = false;
      errorMessage += 'Please enter your first name.\n';
    }
  
    if (!lastName) {
      isValid = false;
      errorMessage += 'Please enter your last name.\n';
    }
  
    if (!email) {
      isValid = false;
      errorMessage += 'Please enter your email address.\n';
    } else if (!isValidEmail(email)) {
      isValid = false;
      errorMessage += 'Please enter a valid email address.\n';
    }
  
    if (!message) {
      isValid = false;
      errorMessage += 'Please enter a message.\n';
    }
  
    if (!isValid) {
      alert('Please correct the following errors:\n\n' + errorMessage);
    }
  
    return isValid;
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function submitForm() {
    const firstName = document.querySelector('input[name="firstname"]').value.trim();
    const lastName = document.querySelector('input[name="lastname"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();
  
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message
    };
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwTxv2u4a1HfDxL1m5Qi4GwOkbExVePRw539FXXuKT_X6_B0PPrYf5ppfcppiVhvsCV-g/exec';
  
    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      console.log('Success!', response);
      alert('Thank you for your message. We will get back to you soon!');
      // Reset the form
      document.querySelector('.form_container').reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Oops! There was a problem submitting your form. Please try again.');
    });
  }

  document.querySelector('.aeroicon').addEventListener('click', function() {
    var email = document.querySelector('.subscribe').value;
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
  
    fetch('https://script.google.com/macros/s/AKfycbwTxv2u4a1HfDxL1m5Qi4GwOkbExVePRw539FXXuKT_X6_B0PPrYf5ppfcppiVhvsCV-g/exec', {
      method: 'POST',
      body: JSON.stringify({
        type: 'newsletter',
        email: email
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        alert('Thank you for subscribing to our newsletter!');
        document.querySelector('.subscribe').value = '';
      } else {
        alert('Error: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  });