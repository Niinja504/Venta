// Importo todo lo de la libreria de Express
import express from "express";
import customersRoutes from "./src/routes/UsersRoutes.js";
import reservationsRoutes from "./src/routes/ReservationsRoutes.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";


// Creo una constante que es igual a la libreria que importé
const app = express();

// Que acepte datos en json
app.use(express.json());

//Traemos el archivo json
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve("./VENTA.json"), "utf-8")
);


// Definir las rutas de las funciones que tendrá la página web
app.use("/api/clientes", customersRoutes);
app.use("/api/reservas", reservationsRoutes);

// Exporto la constante para poder usar express en otros archivos
export default app;