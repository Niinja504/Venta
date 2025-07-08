// Importo todo lo de la libreria de Express
import express from "express";
import customersRoutes from "./src/routes/ReservationsRoutes.js";
import reservationsRoutes from "./src/routes/ReservationsRoutes.js";

// Creo una constante que es igual a la libreria que importé
const app = express();

// Que acepte datos en json
app.use(express.json());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/clientes", customersRoutes);
app.use("/api/reservas", reservationsRoutes);

// Exporto la constante para poder usar express en otros archivos
export default app;