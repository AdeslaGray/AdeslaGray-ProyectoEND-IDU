// 🌐 NAVEGACIÓN SUAVE ENTRE SECCIONES
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();
    const destino = document.querySelector(enlace.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 🍔 MENÚ RESPONSIVE (botón hamburguesa)
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// 🛒 CARRITO DE PRODUCTOS (agrega por nombre con data-nombre)
const botonesCarrito = document.querySelectorAll('.agregar-carrito');
let carrito = [];

botonesCarrito.forEach(boton => {
  boton.addEventListener('click', () => {
    const producto = boton.dataset.nombre || 'Producto sin nombre';
    carrito.push(producto);
    alert(`🛍️ Agregado al carrito: ${producto}`);
  });
});

// 🌠 ANIMACIONES AL HACER SCROLL
const animaciones = document.querySelectorAll('.animado');

const mostrarAnimados = () => {
  animaciones.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.9) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', mostrarAnimados);
window.addEventListener('load', mostrarAnimados);

// 📦 OPCIONAL: MOSTRAR CARRITO EN CONSOLA
window.mostrarCarrito = () => {
  console.log('🧺 Productos en carrito:', carrito);
};