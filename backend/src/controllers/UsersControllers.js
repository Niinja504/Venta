// Array de métodos (C R U D)
const UsersController = {};
import usersModel from "../models/Users.js";

// SELECT - Obtener todos los usuarios
usersController.getUsers = async (req, res) => {
  try {
    const users = await usersModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error });
  }
};

// SELECT BY ID - Obtener un usuario por ID
usersController.getUserById = async (req, res) => {
  try {
    const user = await usersModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar el usuario", error });
  }
};

// INSERT - Crear un nuevo usuario
usersController.createUser = async (req, res) => {
  try {
    const { name, email, password, phone, age } = req.body;
    const newUser = new usersModel({ name, email, password, phone, age });
    await newUser.save();
    res.json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear usuario", error });
  }
};

// DELETE - Eliminar usuario por ID
usersController.deleteUser = async (req, res) => {
  try {
    const deletedUser = await usersModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar usuario", error });
  }
};

// UPDATE - Actualizar usuario por ID
usersController.updateUser = async (req, res) => {
  try {
    const { name, email, password, phone, age } = req.body;
    const updatedUser = await usersModel.findByIdAndUpdate(
      req.params.id,
      { name, email, password, phone, age },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar usuario", error });
  }
};

export default UsersController;
