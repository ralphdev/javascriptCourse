function crearProducto(nombre, precio){
  nombre = nombre || "sin nombre";
  precio = precio || "sin precio";

  console.log("Producto: ", nombre, "Precio", precio);
}

function crearProductoDos(nombre){
    crearProducto(nombre, 50.00);
}

function crearProductoTres(precio){
  crearProducto("Linterna", precio);
}

crearProducto();
crearProducto("Lapiz", 100.00);

crearProductoDos("Camisa");
crearProductoTres(75);