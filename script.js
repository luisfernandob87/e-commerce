"use strict";

import { products } from "./products.js";

function generateCard(products) {
  const container = document.getElementById("container");

  let html = "";
  for (let i = 0; i < products.length; i++) {
    html += `<div class="container-item">
                        <img src="/img/${products[i].imagen}" alt="Imagen de producto">
                        <p>${products[i].nombre}</p>
                        <p>$${products[i].precio}</p>
                        <button>Agregar al carrito</button>
                      </div>`;
  }
  container.innerHTML += html;
}
generateCard(products);
