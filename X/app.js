function mostrarMenu() {
    const menu = "Elige una opcion:\n1. Mostrar X en vertical\n2. Mostrar X en horizontal\n3. Mostrar X al gusto\n4. Un 4x4 de X\n5. Tablas de multiplicar del 1 al 10";
    
    const opcion = prompt(menu);
    
    if (opcion === '1') {
        alert("X\nX\nX\nX");
    } else if (opcion === '2') {
        alert("X X X X");
    } else if (opcion === '3') {
        const cantidad = parseInt(prompt("Cuantas X?"));
        
        if (!isNaN(cantidad) && cantidad > 0) {
            const vertical = Array(cantidad).fill("X").join("\n");
            alert(vertical);
        } else {
            alert("Por favor, ingresa un numero valido mayor que 0.");
        }
    } else if (opcion === '4') {
        alert("X X X X\nX X X X\nX X X X\nX X X X");
    } else if (opcion === '5') {
        let resultado = ""; 
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                resultado += `${i} x ${j} = ${i * j}\n`;
            }
            resultado += "\n"; 
        }

        alert(resultado);
    } else {
        alert("Opcion no valida");
    }
}


mostrarMenu();

