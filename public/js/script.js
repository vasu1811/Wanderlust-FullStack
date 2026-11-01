(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    const handleValidation = (form) => {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    };

    Array.from(forms).forEach(handleValidation);

})();