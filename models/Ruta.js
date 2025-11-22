const mongoose = require("mongoose");
require('./Repartidor')

const RutaSchema = new mongoose.Schema({

  _id: {
    type: String,      
    required: true,
    trim: true
  },

  nombreRuta: {
    type: String,
    required: true,
    trim: true
  },

  zonasCubiertas: [
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

  repartidorAsignadoId: {
    type: String,
    required: true,
    ref:"Repartidor",
    trim: true
  },

  kilometrajeAprox: {
    type: Number,
    required: true,
    min: 0
  },

  tiempoEstimado: {
    type: String, 
    required: true
  },

  activo: {
    type: Boolean,
    default: true
  },

  auditoria: {
    createAt: {
      type: String,
      required: true
    },
    updateAt: {
      type: String,
      default: null
    },
    campoActualizado: {
      type: String,
      default: null
    }
  }

},{collation:"rutas"});

module.exports = mongoose.model("Ruta", RutaSchema);
