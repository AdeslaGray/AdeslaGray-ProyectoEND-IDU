// Mostrar u ocultar el botón "Volver arriba" al hacer scroll
window.addEventListener('scroll', function() {
    const scrollBtn = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

// Animación suave para volver arriba
document.querySelector('.scroll-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mensaje de confirmación al enviar el formulario
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previene recarga de página
    alert('¡Gracias por contactarnos! Pronto te responderemos.');
    form.reset(); // Limpia el formulario después de enviar
});
