"use strict";

let shoppingCart = localStorage.getItem('shoppingCart');
if (shoppingCart){
  shoppingCart = JSON.parse(shoppingCart);
}else{
  shoppingCart = [];
}

function generateCardCart(shoppingCart) {
  const container = document.getElementById("container-cart");

  let html = '';
  for (let j = 0; j < shoppingCart.length; j++) {
    html += `<div class="container-item">
                        <img src="/img/${shoppingCart[j].imagen}" alt="Imagen de producto">
                        <p>${shoppingCart[j].nombre}</p>
                        <p>$${shoppingCart[j].precio}</p>
                        <button onclick="removeCart(${shoppingCart[j].id})">X</button>
                      </div>`;
  }
  container.innerHTML += html;
}
generateCardCart(shoppingCart);


function find(array, cb){
  for(let j=0; j<array.length; j++){
    let result = cb(array[j]);
    if(result===true){
      return array[j];
    }
  }
}

function removeCart(id) {


  function cbFindById(shoppingCart){
    return shoppingCart.id === id;
  }
  let product = find(shoppingCart, cbFindById);
  console.log(product);

  
  let del = JSON.parse(localStorage.getItem('shoppingCart'))
  console.log(del);
  del.splice(product.id,1);
  localStorage.setItem('shoppingCart', JSON.stringify(del));
  // window.location.reload()
}
