(() => {
  'use strict';

  const form = document.getElementById('products-form'); // ✅ correct ID
  const clearBtn = document.getElementById('clearBtn');

  if (!form) return; // safety check

  // Form validation + success message
  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault(); // prevent page reload (remove this if you want real submit)

      // ✅ Add success message right after <h6>
      const successMsg = document.createElement("p");
      successMsg.textContent = "Product has been added successfully!";
      successMsg.style.color = "green";

      // Insert after the <h6>
      const heading = form.querySelector("h6");
      heading.insertAdjacentElement("afterend", successMsg);

      // Clear form after success
      form.reset();
      form.classList.remove('was-validated');
    }

    form.classList.add('was-validated');
  });

  // Clear button resets form and removes validation styles
  clearBtn.addEventListener('click', () => {
    form.reset();
    form.classList.remove('was-validated');
  });

})();
