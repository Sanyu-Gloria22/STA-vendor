(() => {
  'use strict';

  const form = document.getElementById('login-form');
  const clearBtn = document.getElementById('clearBtn');

  // Form validation
  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  });

  // Clear button resets form and removes validation styles
  clearBtn.addEventListener('click', () => {
    form.reset();
    form.classList.remove('was-validated');
  });

})();
