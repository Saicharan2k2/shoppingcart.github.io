document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('payment-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
      form.style.display = 'none';
      successMessage.classList.remove('hidden');
      successMessage.classList.add('visible');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 5000);
    } else {
      alert('Please fill in all the required fields.');
    }
  });
});
