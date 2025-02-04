document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Motores CAT 3412", imagen: "img/Productos/motores-cat.webp", whatsapp: "+573235883871" },
        { nombre: "Motores de combustión", imagen: "img/Productos/motores-de-combustion.webp", whatsapp: "+573235883871" },
        { nombre: "Motores cummins KTA19", imagen: "img/Productos/motores-cummins.webp", whatsapp: "+573235883871" },
        { nombre: "Motor Diesel Weichai-Baudovin", imagen: "img/Productos/motor-diesel.webp", whatsapp: "+573235883871" },
        { nombre: "Motores hidráulicos", imagen: "img/Productos/motores-hidraulicos.webp", whatsapp: "+573235883871" },
        { nombre: "Bomba de dragado", imagen: "img/Productos/bomba-de-dragado.webp", whatsapp: "+573235883871" },
        { nombre: "Bomba de eje libre", imagen: "img/Productos/bomba-de-eje-libre.webp", whatsapp: "+573235883871" },
        { nombre: "Disco de embrague de 59 dientes", imagen: "img/Productos/disco-de-embrague.webp", whatsapp: "+573235883871" },
        { nombre: "Motobombas para la minería industrial", imagen: "img/Productos/motobombas.webp", whatsapp: "+573235883871" },
        { nombre: "Embragues mecánicos", imagen: "img/Productos/embragues-mecanicos.webp", whatsapp: "+573235883871" },
        { nombre: "Tablero para motores mecánicos", imagen: "img/Productos/tablero-para-motores.webp", whatsapp: "+573235883871" },
        { nombre: "Tubo metálico 18, 19 y 20 pulgadas", imagen: "img/Productos/tubo-metalico.webp", whatsapp: "+573235883871" },
        { nombre: "Tubería de polipropileno para Dragas", imagen: "img/Productos/tuberia-de-polipropileno.webp", whatsapp: "+573235883871" },
        
    ];

    const productosContainer = document.getElementById("productos");
    const searchInput = document.getElementById("search");

    function mostrarProductos(lista) {
        productosContainer.innerHTML = ""; // Limpiar la lista
        lista.forEach(prod => {
            let card = document.createElement("div");
            card.classList.add("col-md-4", "mb-3");
            // Crear el mensaje automático para WhatsApp
            let mensajeWhatsApp = encodeURIComponent(`Hola, necesito más información sobre ${prod.nombre}.`);

            card.innerHTML = `
                <div class="card">
                    <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <a href="https://wa.me/${prod.whatsapp}?text=${mensajeWhatsApp}" 
                           class="btn btn-success" target="_blank">
                            Preguntar por WhatsApp
                        </a>
                    </div>
                </div>
            `;
            productosContainer.appendChild(card);
        });
    }

    // Mostrar todos los productos al cargar la página
    mostrarProductos(productos);

    // Agregar evento de búsqueda
    searchInput.addEventListener("keyup", function() {
        const filtro = searchInput.value.toLowerCase();
        const productosFiltrados = productos.filter(prod => 
            prod.nombre.toLowerCase().includes(filtro)
        );
        mostrarProductos(productosFiltrados);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let carousel = new bootstrap.Carousel(document.getElementById('carouselQuienesSomos'), {
        interval: 4000,  // Cambia de imagen cada 4 segundos
        pause: false,  // No se detiene al pasar el mouse
        wrap: true  // Se repite en bucle
    });
});
