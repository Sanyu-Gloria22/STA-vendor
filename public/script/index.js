(() => {
  'use strict';

  const form = document.getElementById('products-form');
  const clearBtn = document.getElementById('clearBtn');

  if (!form) return;

  // Helper: show error message
  function showError(input, message) {
    clearError(input); // remove any existing error

    input.classList.add('is-invalid');

    const error = document.createElement('div');
    error.className = 'error-msg text-danger mt-1';
    error.textContent = message;
    input.parentNode.appendChild(error);
  }

  // Helper: clear error message
  function clearError(input) {
    input.classList.remove('is-invalid');
    const oldError = input.parentNode.querySelector('.error-msg');
    if (oldError) oldError.remove();
  }

  // Handle submit
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // stop form reload

    let isValid = true;
    const inputs = form.querySelectorAll("input[required]");

    inputs.forEach(input => {
      if (!input.value.trim()) {
        showError(input, "Invalid field");
        isValid = false;
      } else {
        clearError(input);
      }
    });

    // Only show success if all inputs are valid
    if (isValid) {
      // Remove old success message
      const oldAlert = form.querySelector(".bg-success");
      if (oldAlert) oldAlert.remove();

      // Add success message
      const successMsg = document.createElement("div");
      successMsg.className = "mt-2 p-2 rounded bg-success text-white";
      successMsg.textContent = "Product has been added successfully!";

      const heading = form.querySelector("h6");
      heading.insertAdjacentElement("afterend", successMsg);

      // Reset form
      form.reset();
    }
  });

  // Clear button
  clearBtn.addEventListener('click', () => {
    form.reset();

    // Remove all error messages
    form.querySelectorAll('.error-msg').forEach(e => e.remove());
    form.querySelectorAll('.is-invalid').forEach(i => i.classList.remove('is-invalid'));

    // Remove success message
    const oldAlert = form.querySelector(".bg-success");
    if (oldAlert) oldAlert.remove();
  });

})();
