document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Motores CAT 3512", imagen: "img/Productos/motores-cat.webp", whatsapp: "+573222033623" },
        { nombre: "Motores de combustión", imagen: "img/Productos/motores-de-combustion.webp", whatsapp: "+573222033623" },
        { nombre: "Motores cummins KTA19", imagen: "img/Productos/motores-cummins.webp", whatsapp: "+573222033623" },
        { nombre: "Motor Diesel Weichai-Baudovin", imagen: "img/Productos/motor-diesel.webp", whatsapp: "+573222033623" },
        { nombre: "Motores hidráulicos", imagen: "img/Productos/motores-hidraulicos.webp", whatsapp: "+573222033623" },
        { nombre: "Bomba de dragado", imagen: "img/Productos/bomba-de-dragado.webp", whatsapp: "+573222033623" },
        { nombre: "Bomba de eje libre", imagen: "img/Productos/bomba-de-eje-libre.webp", whatsapp: "+573222033623" },
        { nombre: "Disco de embrague de 59 dientes", imagen: "img/Productos/disco-de-embrague.webp", whatsapp: "+573222033623" },
        { nombre: "Motobombas para la minería industrial", imagen: "img/Productos/motobombas.webp", whatsapp: "+573222033623" },
        { nombre: "Embragues mecánicos", imagen: "img/Productos/embragues-mecanicos.webp", whatsapp: "+573222033623" },
        { nombre: "Tablero para motores mecánicos", imagen: "img/Productos/tablero-para-motores.webp", whatsapp: "+573222033623" },
        { nombre: "Tubo metálico 18, 19 y 20 pulgadas", imagen: "img/Productos/tubo-metalico.webp", whatsapp: "+573222033623" },
        { nombre: "Tubería de polipropileno para Dragas", imagen: "img/Productos/tuberia-de-polipropileno.webp", whatsapp: "+573222033623" },
        { nombre: "Ecosonda", imagen: "img/Productos/ecosonda.webp", whatsapp: "+573222033623" },
        { nombre: "Guaya de 1 Pulgada con alma de acero", imagen: "img/Productos/guaya-acero.webp", whatsapp: "+573222033623" },
        
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

document.addEventListener("DOMContentLoaded", function() {
    // Cambiar color al hacer clic en una categoría
    const menuLinks = document.querySelectorAll(".menu-link");

    menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        menuLinks.forEach(item => item.style.color = "white"); // Restaurar color
        this.style.color = "#ffd700"; // Cambiar color del clic
    });
});
});

// Verificar si el Service Worker está disponible y registrarlo
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log("Service Worker registrado"))
        .catch(error => console.log("Error registrando SW:", error));
}

// Variables de instalación
let deferredPrompt;
const installBtn = document.getElementById("installBtn");
const iosInstructions = document.getElementById("ios-instructions");

// Función para detectar si la app ya está instalada en iPhone o Android
function isAppInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

// Ocultar los mensajes si la app ya está instalada
function checkInstallationStatus() {
    if (isAppInstalled()) {
        installBtn.style.display = "none";
        iosInstructions.style.display = "none";
    }
}

// Ejecutar la verificación al cargar la página
document.addEventListener("DOMContentLoaded", checkInstallationStatus);

// Detectar si es iOS para mostrar instrucciones
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

if (isIOS()) {
    document.addEventListener("DOMContentLoaded", () => {
        if (!isAppInstalled()) {
            iosInstructions.style.display = "block"; // Mostrar solo si no está instalada
        }
    });
} else {
    // Solo mostrar el botón en Android cuando la app no está instalada
    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        deferredPrompt = event;
        if (!isAppInstalled()) {
            installBtn.style.display = "block";
        }
    });

    installBtn.addEventListener("click", () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choice) => {
                if (choice.outcome === "accepted") {
                    console.log("App instalada");
                    installBtn.style.display = "none";
                    iosInstructions.style.display = "none"; // Ocultar mensaje en iOS también
                }
                deferredPrompt = null;
            });
        }
    });

    // También ocultar el botón y mensajes si la app se instala en Android
    window.addEventListener("appinstalled", () => {
        console.log("PWA instalada");
        installBtn.style.display = "none";
        iosInstructions.style.display = "none";
    });
}

function checkInstallationStatus() {
    setTimeout(() => {
        if (isAppInstalled()) {
            installBtn.style.display = "none";
            iosInstructions.style.display = "none";
        }
    }, 500); // Se retrasa medio segundo para no interferir con la carga del icono
}

