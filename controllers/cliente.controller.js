const Cliente=require("../models/Cliente")

exports.obtenerClientes= async(req,res)=>{
    try{
        const clientes= await Cliente.find()  
        res.json(clientes)  
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.crearCliente=async (req,res) =>{
    try{
        const cliente=await Cliente.create(req.body);
        res.json(cliente)

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.actualizarCliente= async (req,res)=>{
    try{
        const {id}= req.params

        const clienteActualizado= await Cliente.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if(!clienteActualizado){
            return res.status(404).json({ error: "cliente no encontrado" });
        }
        res.json(clienteActualizado)
    } catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.eliminarCliente=async(req,res)=>{
    try{
        const { id } = req.params

        const clienteEliminado= await Cliente.findByIdAndDelete(id)
        if(!clienteEliminado){
            return res.status(404).json({ error: "cliente no encontrad" });
        }
        res.json({mensaje: "cliente eliminado", clienteEliminado})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}