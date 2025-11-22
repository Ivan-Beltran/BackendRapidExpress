const mongoose = require("mongoose");
require('./Envios')

const PagoSchema = new mongoose.Schema({
  envioId: {
    type: String,
    required: true,
    ref:"Envio",
    trim: true
  },
  monto: {
    type: Number,
    required: true,
    min: 0
  },
  metodoPago: {
    type: String,
    required: true,
    enum: ["efectivo", "tarjeta", "transferencia"] // puedes quitar enum si quieres más flexibilidad
  },
  fecha: {
    type: Date,
    required: true,
    default: Date.now
  },
  estado: {
    type: String,
    required: true,
    enum: ["pendiente", "aprobado", "rechazado"]
  }
}
);

module.exports = mongoose.model("Pago", PagoSchema);