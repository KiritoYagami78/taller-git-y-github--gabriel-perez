// MENU RESPONSIVE
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");
// Manejo del menú responsive (seguro si no existen elementos)
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // CERRAR MENU AL HACER CLICK
  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// CARRITO
let carrito = [];

function agregarCarrito(nombre, precio, stockId) {
  const stockElemento = document.getElementById(stockId);
  if (!stockElemento) {
    console.warn('Elemento de stock no encontrado:', stockId);
    return;
  }

  let stock = parseInt(stockElemento.textContent, 10);
  if (isNaN(stock)) stock = 0;

  if (stock <= 0) {
    alert("Sin stock 😢");
    return;
  }

  stock--;
  stockElemento.textContent = stock;

  carrito.push({ nombre, precio });

  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('carrito');
  if (!lista) return;
  lista.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
  // EFECTO SCROLL HERO
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if(window.scrollY > 50){
    hero.classList.add('scrolled');
  } else {
    hero.classList.remove('scrolled');
  }
});
// EFECTO BLUR AL SCROLL EN HERO
window.addEventListener('scroll', ()=>{
  const hero = document.querySelector('.hero');
  if(window.scrollY > 50){
    hero.classList.add('scrolled');
  } else {
    hero.classList.remove('scrolled');
  }
});
}