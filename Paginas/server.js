const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "btc.html"));
});

// Escuchar en el puerto
app.listen(port, () => {
    console.log(`Servidor en escucha desde http://localhost:${port}`);
});
