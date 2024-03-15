//Lectura de codigo de barras

function leerCodigoBarras(codigo) {
    // Busca el producto en el archivo JSON
    const producto = productos.find(prod => prod.codigo === codigo);
  
    // Si el producto se encuentra, agregarlo al carrito
    if (producto) {
      agregarAlCarrito(producto);
    } else {
      // Mostrar un mensaje de error
      console.error("Producto no encontrado");
    }
  }

  const canvas = document.getElementById("canvas");
const webcodecam = new WebCodecam(canvas);

webcodecam.init({
  // Opciones de la cámara
});



// Actualizacion del carrito de compra 

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const listaProductos = document.querySelector(".lista-productos");
    listaProductos.innerHTML = "";
  
    // Recorrer la lista de productos en el carrito
    for (const producto of carrito) {
      // Crear un elemento para cada producto
      const elementoProducto = document.createElement("li");
      elementoProducto.classList.add("producto");
  
      // Agregar la información del producto al elemento
      elementoProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Precio: $${producto.precio}</p>
      `;
  
      // Agregar el elemento a la lista
      listaProductos.appendChild(elementoProducto);
    }
  
    // Mostrar el precio total
    const precioTotal = calcularPrecioTotal();
    const spanPrecioTotal = document.querySelector(".precio-total");
    spanPrecioTotal.textContent = precioTotal;
  }
  
  // Función para calcular el precio total
  function calcularPrecioTotal() {
    let precioTotal = 0;
  
    // Recorrer la lista de productos en el carrito
    for (const producto of carrito) {
      precioTotal += producto.precio * producto.cantidad;
    }
  
    return precioTotal;
  }
  

webcodecam.onResult(function (codigo) {
  leerCodigoBarras(codigo);
});

  