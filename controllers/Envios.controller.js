require("../models/Cliente")
require("../models/Repartidor");
const Envio = require('../models/Envios')

exports.obtenerEnvios = async (req, res) => {
    try {

        const envio = await Envio.find().populate("clienteId", "nombreCompleto").populate("repartidorId", "nombreCompleto"); 
        res.json(envio)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.crearEnvios= async(req,res)=>{
    try{
        const envio= await Envio.create(req.body)
        res.json(envio)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.actualizarEnvios= async(req,res)=>{
    try{
        const {id}=req.params

        const envioActualizado= await Envio.findByIdAndUpdate(
             id,
             req.body,
             {new:true}
        )
        if(!envioActualizado){
            return res.status(404).json({ error: "envio no encontrado" });
        }
        res.json(envioActualizado)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.eliminarEnvios =async(req,res)=>{
    try{

        const {id}=req.params
        const envioEliminado= await Envio.findByIdAndDelete(id)
        if(!envioEliminado){
            return res.status(404).json({ error: "envio no encontrado" });
        }
        res.json({mensaje:"envio eliminado",envioEliminado})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}