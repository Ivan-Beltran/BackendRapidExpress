const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
    _id: { type: String },  

    nombreCompleto: { type: String },
    dui:            { type: String },
    telefono:       { type: String },
    correoElectronico: { type: String },

    direccion: {
        departamento: { type: String },
        municipio:    { type: String },
        colonia:      { type: String },
        detalle:      { type: String }
    },

    auditoria: {
        createAt: { type: Date },             // acepta "2025-11-20T..."
        updateAt: { type: Date, default: null },
        userId:   { type: String }
    }
});

module.exports = mongoose.model("Cliente", ClienteSchema);
