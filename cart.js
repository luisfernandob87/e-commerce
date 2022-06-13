"use strict";

let initialValue = [
  { id: 1, imagen: 'playera_azul_version2.webp', nombre: 'Playera Azul',  precio: 100, stock: 5}
];

function generateCardCart(initialValue) {
  const container = document.getElementById("container-cart");

  let html = "";
  for (let j = 0; j < initialValue.length; j++) {
    html += `<div class="container-item">
                        <img src="/img/${initialValue[j].imagen}" alt="Imagen de producto">
                        <p>${initialValue[j].nombre}</p>
                        <p>$${initialValue[j].precio}</p>
                        <button>Agregar al carrito</button>
                      </div>`;
  }
  container.innerHTML += html;
}
generateCardCart(initialValue);