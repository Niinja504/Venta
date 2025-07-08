// Controlador para reservas (C R U D)
const reservationsController = {};
import reservationModel from "../models/Reservas.js"

// GET ALL - Obtener todas las reservas
reservationsController.getReservations = async (req, res) => {
  try {
    const reservations = await reservationModel.find().populate("cliente_id", "name email");
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las reservas", error });
  }
};

// GET BY ID - Obtener una reserva por ID
reservationsController.getReservationById = async (req, res) => {
  try {
    const reservation = await reservationModel.findById(req.params.id).populate("cliente_id", "name email");
    if (!reservation) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar la reserva", error });
  }
};

// POST - Crear una nueva reserva
reservationsController.createReservation = async (req, res) => {
  try {
    const { cliente_id, vehicle, service, status } = req.body;
    const newReservation = new reservationModel({ cliente_id, vehicle, service, status });
    await newReservation.save();
    res.json({ message: "Reserva creada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la reserva", error });
  }
};

// DELETE - Eliminar una reserva
reservationsController.deleteReservation = async (req, res) => {
  try {
    const deleted = await reservationModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la reserva", error });
  }
};

// PUT - Actualizar una reserva
reservationsController.updateReservation = async (req, res) => {
  try {
    const { cliente_id, vehicle, service, status } = req.body;
    const updated = await reservationModel.findByIdAndUpdate(
      req.params.id,
      { cliente_id, vehicle, service, status },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.json({ message: "Reserva actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la reserva", error });
  }
};

export default reservationsController;
