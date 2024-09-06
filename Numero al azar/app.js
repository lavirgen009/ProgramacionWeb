
function jugarJuego() {
    // Generar un número aleatorio del 1 al 10
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let adivinado = false;
    
    // Intentos ilimitados
    while (!adivinado) {
        // Pedir al usuario que adivine el número
        let intento = parseInt(prompt("Adivina el número del 1 al 10:"));
        
        // Comprobar si el intento es el número correcto
        if (intento === numeroAleatorio) {
            alert("Has adivinado el número.");
            adivinado = true;
        } else {
            alert("Intento incorrecto, vuelve a intentarlo.");
        }
    }
}

// Función para mostrar el mensaje inicial y manejar las opciones del usuario
function mostrarOpciones() {
    // Mostrar un mensaje con dos opciones
    const opcion = prompt("Elige una opción:\n1. Jugar\n2. No quiero jugar");
    
    // Manejar la opción del usuario
    if (opcion === "1") {
        jugarJuego();
    } else if (opcion === "2") {
        alert("Tu te lo pierdes Crack.");
    } else {
        alert("Opción no válida. Por favor elige 1 o 2.");
        mostrarOpciones(); 
    }
}

// Llamar a la función para mostrar las opciones
mostrarOpciones();
