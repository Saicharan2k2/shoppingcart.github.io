document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('payment-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check form validity
    if (form.checkValidity()) {
      // Hide the form and show the success message
      form.style.display = 'none';
      successMessage.classList.remove('hidden');
      successMessage.classList.add('visible');

      // Redirect back to the home page after 3 seconds
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 5000);
    } else {
      alert('Please fill in all the required fields.');
    }
  });
});
