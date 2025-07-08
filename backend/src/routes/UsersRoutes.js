import express from "express";
import customersController from "../controllers/UsersControllers.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(customersController.getUsers)
  .post(customersController.createUser);

router
  .route("/:id")
  .get(customersController.getUserById)
  .put(customersController.updateUser)
  .delete(customersController.deleteUser);

export default router;