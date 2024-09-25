// Arreglo para almacenar
let carrito = [];

// Precios de los productos
const precios = {
    "Camisa": 300,
    "Pantalon": 500,
    "Zapatos": 800,
    "Sombrero": 200
};

// Funcion para mostrar el menu
function mostrarMenu() {
    return parseInt(prompt(`
        Seleccione un producto para agregar al carrito: 
        1.- Camisa - $300
        2.- Pantalon - $500
        3.- Zapatos - $800
        4.- Sombrero - $200
        5.- Ver carrito y Total
        6.- Salir
        Elige una opción:
    `));
}

// Funcion para agregar productos
function agregarProducto(opcion) {
    let producto;
    switch (opcion) {
        case 1:
            producto = "Camisa";
            break;
        case 2:
            producto = "Pantalon";
            break;
        case 3:
            producto = "Zapatos";
            break;
        case 4:
            producto = "Sombrero";
            break;
        default:
            return; 
    }
    
    carrito.push(producto);
    console.log(`Producto agregado: ${producto}`);
}

// Funcion para ver el carrito y el total
function verCarrito() {
    if (carrito.length === 0) {
        console.log("No has agregado ningun producto.");
        return;
    }
    //Sumar el total del valor de los productos
    let total = 0;
    console.log("Productos en el carrito:");
    carrito.forEach(producto => {
        console.log(`- ${producto} - $${precios[producto]}`);
        total += precios[producto];
    });
    console.log(`Total: $${total}`);
}

// Funcion principal para manejar el flujo del programa
function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
            case 2:
            case 3:
            case 4:
                agregarProducto(opcion);
                break;
            case 5:
                verCarrito();
                break;
            case 6:
                continuar = false;
                console.log("Saliendo");
                break;
            default:
                console.log("Opcion no valida MDFK");
        }
    }
}

// Iniciar el programa
iniciarPrograma();
