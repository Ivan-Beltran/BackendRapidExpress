const mongoose = require("mongoose");
require("./Cliente")
require("./Repartidor");

const EnvioSchema = new mongoose.Schema({
    _id: { type: String, required: true },  

    clienteId:   { type: String,ref:"Cliente", required: true }, 
    repartidorId:{ type: String, ref:"Repartidor",required: true },

    codigoRastreo: { type: String, required: true },

    fechaEnvio: { type: Date, default: Date.now },

    direccionDestino: {
        departamento: { type: String, required: true },
        municipio:    { type: String, required: true },
        colonia:      { type: String },
        detalle:      { type: String }
    },

    pesoPaquete: { type: String },
    costoEnvio:  { type: Number },

    estado: { type: String, enum: ["pendiente", "en camino", "entregado", "cancelado"] },

    fechaEntrega: { type: Date },

    actualizaciones: {
        fecha:      { type: Date },
        ubicacion:  { type: String },
        comentario: { type: String }
    }
});

module.exports = mongoose.model("Envio", EnvioSchema);
