
let carrito = [];


function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarTotal();
}


function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarTotal();
}


function actualizarTotal() {
  let total = 0;
  for (let producto of carrito) {
    total += producto.precio;
  }
  document.getElementById('totalPrecio').textContent = '$' + total.toFixed(2);
}


function actualizarCantidad() {
  const cantidadSelect = document.getElementById('cantidad');
  const cantidadSeleccionada = parseInt(cantidadSelect.value);
  
}


const agregarAlCarritoButtons = document.querySelectorAll('.agregarAlCarrito');
const eliminarButtons = document.querySelectorAll('.borrar');


for (let i = 0; i < agregarAlCarritoButtons.length; i++) {
  agregarAlCarritoButtons[i].addEventListener('click', function() {
   
    const nombre = this.parentNode.parentNode.querySelector('h3').textContent;
    const modelo = this.parentNode.parentNode.querySelector('p:nth-of-type(2)').textContent;
    const precioTexto = this.parentNode.parentNode.querySelector('p:nth-of-type(3)').textContent;
    const precio = parseFloat(precioTexto.replace('$', ''));

    
    const producto = {
      nombre,
      modelo,
      precio
    };
    agregarAlCarrito(producto);
  });
}


for (let i = 0; i < eliminarButtons.length; i++) {
  eliminarButtons[i].addEventListener('click', function() {
    const index = i; 
    eliminarDelCarrito(index);
  });
}


document.getElementById('cantidad').addEventListener('change', actualizarCantidad);
