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
                        <button class="remove" onclick="removeCart(${shoppingCart[j].id})">X</button>
                      </div>`;
  }
  container.innerHTML += html;
}
generateCardCart(shoppingCart);
  let pagoTotal = 0;
for (let l = 0; l < shoppingCart.length; l++) {
  let pago = shoppingCart[l].precio;
  pagoTotal += pago;
}

function totalPago(pagoTotal){
  let containerPago = document.getElementById("total");
  let htmlPago = `<p>$${pagoTotal}</p><button onclick="finalizar()" class="finalizar">Finalizar Compra</button>`;
  containerPago.innerHTML = htmlPago;
}
totalPago(pagoTotal);
function find(array, cb){
  for(let j=0; j<array.length; j++){
    let result = cb(array[j]);
    if(result===true){
      return array[j];
    }
  }
}
function removeCart(id) { 
  let shoppingTemp = JSON.parse(localStorage.getItem('shoppingCart'));
  function cbFindById(shoppingTemp){
    return shoppingTemp.id === id;
  }
  let product = find(shoppingTemp, cbFindById);
  for (let k = 0; k < shoppingTemp.length; k++) {
      if (product.id === shoppingTemp[k].id) {
        shoppingTemp.splice(k,1)
      }
    }
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingTemp));
  // generateCardCart(shoppingTemp);
  window.location.reload();
}
function finalizar(){
  localStorage.clear();
  window.location.reload();
}
