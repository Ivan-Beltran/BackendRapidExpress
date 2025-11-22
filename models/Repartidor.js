const mongoose = require("mongoose");

const RepartidorSchema = new mongoose.Schema({
  _id: {
    type: String,       
    required: true,
    trim: true
  },
  nombreCompleto: {
    type: String,
    required: true,
    trim: true
  },
  licencia: {
    type: String,
    required: true,
    trim: true
  },
  telefono: {
    type: String,
    required: true,
    trim: true
  },

  zonasAsignadas: [
    {
      departamento: {
        type: String,
        required: true,
        trim: true
      },
      municipios: {
        type: [String],
        required: true,
        validate: v => Array.isArray(v) && v.length > 0
      }
    }
  ],

  activo: {
    type: Boolean,
    default: true
  }

},{collection:"repartidores"});

module.exports = mongoose.model("Repartidor", RepartidorSchema);
