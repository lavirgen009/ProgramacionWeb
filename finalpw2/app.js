// Importar dependencias
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require('express-session');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar Body-Parser para manejar formularios
app.use(bodyParser.urlencoded({ extended: false }));

// Configurar el middleware de sesión
app.use(session({
    secret: 'mi_tienda_online', // Puedes cambiar la clave secreta
    resave: false,
    saveUninitialized: true
}));

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda_online',
    port: 3306
});

// Probar conexión a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

// Ruta principal para mostrar productos
app.get('/', (req, res) => {
    db.query('SELECT * FROM productos', (err, resultados) => {
        if (err) {
            console.error('Error al obtener los productos:', err);
            res.status(500).send('Error al obtener los productos');
        } else {
            // Pasamos los productos a la vista
            res.render('index', { productos: resultados, carrito: req.session.carrito });
        }
    });
});

// Agregar un producto al carrito
app.post('/agregar-al-carrito', (req, res) => {
    const idProducto = req.body.idProducto.toString();  // Asegúrate de que el id sea un string
    const cantidad = parseInt(req.body.cantidad) || 1;

    // Verificar si el carrito ya existe en la sesión
    if (!req.session.carrito) {
        req.session.carrito = [];
    }

    // Verificar si el producto ya está en el carrito
    const productoExistente = req.session.carrito.find(item => item.idProducto === idProducto);
    
    if (productoExistente) {
        // Si el producto ya existe, aumentar la cantidad
        productoExistente.cantidad += cantidad;
    } else {
        // Si el producto no existe, agregarlo al carrito
        req.session.carrito.push({ idProducto, cantidad });
    }

    // Redirigir al carrito
    res.redirect('/carrito');
});

// Ver el carrito de compras
app.get('/carrito', (req, res) => {
    console.log(req.session.carrito);
    // Obtener los productos desde la base de datos para mostrar los detalles
    const idsProductos = req.session.carrito.map(item => item.idProducto).join(',');

    if (idsProductos) {
        db.query(`SELECT * FROM productos WHERE id IN (${idsProductos})`, (err, productos) => {
            if (err) {
                console.error('Error al obtener los productos:', err);
                res.status(500).send('Error al obtener los productos');
            } else {
                // Enviar los productos con la cantidad y el total
                res.render('carrito', { productos: productos, carrito: req.session.carrito });
            }
        });
    } else {
        res.render('carrito', { productos: [], carrito: [] });
    }
});

// Iniciar servidor
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
