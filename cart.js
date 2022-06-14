"use strict";

let shoppingCart = localStorage.getItem('shoppingCart');
if (shoppingCart){
  shoppingCart = JSON.parse(shoppingCart);
}else{
  shoppingCart = [];
}

function generateCardCart(shoppingCart) {
  const container = document.getElementById("container-cart");

  let html = "";
  for (let j = 0; j < shoppingCart.length; j++) {
    html += `<div class="container-item">
                        <img src="/img/${shoppingCart[j].imagen}" alt="Imagen de producto">
                        <p>${shoppingCart[j].nombre}</p>
                        <p>$${shoppingCart[j].precio}</p>
                      </div>`;
  }
  container.innerHTML = html;
}
generateCardCart(shoppingCart);

