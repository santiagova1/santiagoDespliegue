//Array productos

const productosCompra = [{
        id: 1,
        foto: "Libros.jpg",
        nombre: "Libros a tutiplén",
        descripcion: "Una extensa variedad de literatura: novelas, ensayos, divulgación, liturgia, esotérico, infinidad de géneros.",
        unidades: 35,
        precio: 54.8,
        descuento: true


    },

    {

        id: 2,
        foto: "Frutas.jpg",
        nombre: "Frutas frescas",
        descripcion: "Frutas recogidas del día por parte de nuestros increíble proveedores. No hay nada igual.",
        unidades: 8,
        precio: 2.6,
        descuento: false

    },

    {
        id: 3,
        foto: "monitores.jpg",
        nombre: "Monitores de locura",
        descripcion: "Mejores monitores calidad-precio del mercado, Sumérgete en la acción con la mayor fidelidad en imagen.",
        unidades: 40,
        precio: 164.74,
        descuento: true

    },

    {
        id: 4,
        foto: "Neumaticos.png",
        nombre: "Neumáticos Speed",
        descripcion: "Siente la velocidad y el control con estos únicos neumáticos cuyo agarre es sublime.",
        unidades: 62,
        precio: 122,
        descuento: true
    },

    {
        id: 5,
        foto: "Instrumentos.jpeg",
        nombre: "Instrumentos de primera mano",
        descripcion: "Una colección de maravillas musicales creadas por artesanos locales. Desde viento metal a percusión.",
        unidades: 32,
        precio: 50,
        descuento: true

    },

    {
        id: 6,
        foto: "Bicicletas.jpg",
        nombre: "Bicicletas raudas",
        descripcion: "Si estás buscando una bicicleta, no esperes más. Nuestra galería comprende desde bicicletas de ciudad hasta las de montaña más duras.",
        unidades: 12,
        precio: 531.25,
        descuento: false

    },

    {
        id: 7,
        foto: "Pantalones.jpg",
        nombre: "Pantalones domésticos",
        descripcion: "Los mejores pantalones de andar por casa posibles. Cosidos con la mejor lana, su tacto y retención del calor son únicos.",
        unidades: 19,
        precio: 12,
        descuento: false

    },

    {
        id: 8,
        foto: "sillas.jpg",
        nombre: "Sillas Deluxe",
        descripcion: "La colección 'Deluxe' mezclan de forma maestra comodidad y estilo.",
        unidades: 5,
        precio: 23,
        descuento: true

    },

    {
        id: 9,
        foto: "shoes.jpg",
        nombre: "Zapatos Detox",
        descripcion: "Alta gama en zapatos sencillos y versátiles para todo tipo de situaciones. Sus pies no lo lamentarán.",
        unidades: 85,
        precio: 14.6,
        descuento: false

    }
]

/*
window.onload = function() {


    var detalleProductos = "";


    document.querySelector(".compra").addEventListener("click", muestraCarrito);

    const contenedor = document.createElement("div");
    const productos = document.createElement("section");
    const carrito = document.createElement("section");

    contenedor.classList.add("contenedor");
    productos.classList.add("productos");
    carrito.classList.add("carrito");

    document.body.appendChild(contenedor);
    contenedor.appendChild(productos);
    contenedor.appendChild(carrito);


}



//Imagen de Carrito

//Eliminar compra del carrito
carrito.firstChild.addEventListener("click", eliminaCompra);


*/

//Procedimiento al cargar la ventana   
window.onload = function() {


    //Variables
    var detalleProductos = "";

    document.querySelector(".compra").addEventListener("click", muestraCarrito);

    //Creamos elementos principales del carrito
    const contenedor = document.createElement("div");
    const productos = document.createElement("section");
    const carrito = document.createElement("section");

    contenedor.classList.add("contenedor");
    productos.classList.add("productos");
    carrito.classList.add("carrito");

    //Agregamos nodos 
    document.body.appendChild(contenedor);
    contenedor.appendChild(productos);
    contenedor.appendChild(carrito)

    //Creamos encabezado y cuerpo del carrito
    const headerCarrito = document.createElement("header");
    headerCarrito.innerHTML = "<h3>Productos en el carrito</h3>";
    carrito.appendChild(headerCarrito);

    //Evento para añadir producto al carrito
    productos.addEventListener("click", ponEnCarrito);

    //Recorrer array de productos
    for (producto of productosCompra) {
        detalleProductos += `
        <article>
        <img src="imagenes/${producto.foto}" alt="${producto.nombre}">
        <div class="info">
        <span ${(producto.descuento)?'class="promocionado"': ""}>${producto.nombre}</span>
        <span>${producto.descripcion}</span>
        <span>Unidades disponibles</span>
        <span>${producto.unidades}</span><br>
        <span>Precio unidad</span>
        <span>${producto.precio}€</span>
        <span>${(producto.descuento)?"Producto en promoción": ""}</span>
        <span class="boton">Añadir a la compra</span>
        </div>
    </article>
    `
    }

    //salidaProductos en divProductos que ya está en el DOM
    productos.innerHTML = detalleProductos;

    //Muestra carrito
    function muestraCarrito(even) {

        // Si no hay productos en carrito no se muestra. En ambos casos se despliega desde la derecha
        if (carrito.children.length > 0)
            carrito.style.right = (carrito.style.right == "-400px") ? "0" : "-400px";
    }

    /*
        //Función muestra del carrito.
        function ponEnCarrito(even) {
            if (even.target.classList.contains('boton')) {
                let itemCarrito = `
                               <div class="detalle-carrito">
                                   <div class="img-carrito">
                                       <img src = "${even.target.parentNode.parentNode.children[0].src}" alt = "Imagen producto" width="90px">
                                   </div>
                                   <div class="header-producto-carrito">
                                       <span>${even.target.parentNode.children[0].innerText}</span>
                                   </div>
                                   
                               </div>
                           `
                carrito.innerHTML += itemCarrito;
            }
        }
    */
}