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
                        <button onclick="addCart(${products[i].id})">Agregar al carrito</button>
                      </div>`;
  }
  container.innerHTML = html;
}
generateCard(products);

// agregar a carrito

let initialValue = [];


function find(array, cb){
  for(let j=0; j<array.length; j++){
    let result = cb(array[j]);
    if(result===true){
      return array[j];
    }
  }
}

function addCart(id) {

  function cbFindById(products){
    return products.id === id;
  }

  let product = find(products, cbFindById)
  initialValue.push(product)
  localStorage.setItem('shoppingCart',JSON.stringify(initialValue))
  }

window.addCart = addCart;