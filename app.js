const email = document.getElementById('email-address');
const errorIcon = document.getElementById('error-icon');
const errorText = document.getElementById('error-text');
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('email-form');

submitBtn.addEventListener('click', (event) => {
    if (!email.checkValidity()) {
    event.preventDefault();
    email.style.border = '1px solid var(--clr-soft-red)';
    errorText.classList.remove('hidden');
    errorIcon.classList.remove('hidden');
    
  
    } else {
        email.style.border = '';
        errorText.classList.add('hidden');
        errorIcon.classList.add('hidden');
    }
  });
  
  email.addEventListener('input', () => {
      if (email.checkValidity()) {
        email.style.border = '1px solid var(--clr-soft-red)';
        errorText.classList.add('hidden');
        errorIcon.classList.add('hidden');
      }
    });
 