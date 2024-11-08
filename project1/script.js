function validateForm(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;
    const termsChecked = document.getElementById("terms").checked;
  
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const phonePattern = /^\d{10}$/;
    const cardPattern = /^\d{16}$/;
    const cvvPattern = /^\d{3}$/;
  
    // Expiry date validation (not in the past)
    const today = new Date();
    const expiry = new Date(expiryDate);
    if (expiry < today) {
      alert("Please enter a valid expiry date in the future.");
      return false;
    }
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
  
    if (!cardPattern.test(cardNumber)) {
      alert("Please enter a valid 16-digit card number.");
      return false;
    }
  
    if (!cvvPattern.test(cvv)) {
      alert("Please enter a valid 3-digit CVV.");
      return false;
    }
  
    if (!termsChecked) {
      alert("You must agree to the terms and conditions.");
      return false;
    }
  
    alert("Payment successful!");
    return true;
  }
  
