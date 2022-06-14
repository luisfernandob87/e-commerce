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
                        <button onclick="addCart()">Agregar al carrito</button>
                      </div>`;
  }
  container.innerHTML += html;
}
generateCard(products);

// agregar a carrito

let initialValue = [];

function addCart() {
  initialValue.push({ 
    id: 2, 
    imagen: 'playera_blanca_version2.webp', 
    nombre: 'Playera Blanca',  
    precio: 80, 
    stock: 5
  })
  localStorage.setItem('shoppingCart',JSON.stringify(initialValue));
}

// function find(array, cb) {
//   for(let i=0; i<array.length; i++) {
//       let result = cb(array[i]);
//       if(result===true) {
//           return array[i];
//       }
//   }
// }

// function addCart(id) {
//   function searchProduct(products){
//     return products.id === id;
//   }
//   console.log('ID', id);
//   console.log('productos', products);

//   let productSearch = find(products, searchProduct);
//   console.log(productSearch);
//   let initialValue = JSON.parse(localStorage.getItem('products'));
//   if (initialValue){
//     initialValue.push(productSearch);
//     localStorage.setItem('shoppingCart',JSON.stringify(initialValue));
//   }else{
//     let arrayProduct = [];
//     arrayProduct.push(productSearch);
//     localStorage.setItem('shoppingCart',JSON.stringify(initialValue))
//   }
  
// }




window.addCart = addCart;