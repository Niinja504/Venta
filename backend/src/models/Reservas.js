import { model, Schema, Types } from "mongoose";

const reservationSchema = new Schema(
  {
    cliente_id: {
      type: Types.ObjectId, 
      ref: "users",
      required: true,
    },
    vehicle: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["pendiente", "confirmado", "cancelado", "completado"],
      default: "pendiente",
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("reservations", reservationSchema);
