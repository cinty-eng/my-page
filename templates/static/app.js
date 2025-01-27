document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

/* Código para hacer funcionar formulario */
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.classList.add('loading');

    const formData = new FormData(this);

    fetch('/send_email', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        showFlashMessage('Mensaje exitosamente enviado.', 'success');
        this.reset();  // Limpiar formulario
        submitButton.classList.remove('loading');
    })
    .catch(error => {
        showFlashMessage('Hubo un error al enviar el mensaje.', 'error');
        submitButton.classList.remove('loading');
    });
});

function showFlashMessage(message, category) {
    const flashContainer = document.getElementById('flash-messages');
    const flashMessage = document.createElement('div');
    flashMessage.className = `alert ${category}`;
    flashMessage.textContent = message;

    flashContainer.appendChild(flashMessage);

    setTimeout(() => {
        flashMessage.remove();
    }, 5000);
}


