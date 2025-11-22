require('../models/Repartidor')
const Ruta=require('../models/Ruta')

exports.obtenerRutas=async(req,res)=>{
    try{

        const rutas =await Ruta.find().populate("repartidorAsignadoId", "nombreCompleto"); 
        res.json(rutas)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.crearRuta = async (req, res) => {
    try {
        const nuevaRuta = Ruta.create(req.body);
        
        res.status(201).json(nuevaRuta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.actualizarRuta = async (req, res) => {
    try {
        const { id } = req.params;

        const rutaActualizada = await Ruta.findByIdAndUpdate(
            id,
            req.body,
            { new: true } 
        );

        if (!rutaActualizada) {
            return res.status(404).json({ error: "Ruta no encontrada" });
        }

        res.json(rutaActualizada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.eliminarRuta = async (req, res) => {
    try {
        const { id } = req.params;

        const rutaEliminada = await Ruta.findByIdAndDelete(id);

        if (!rutaEliminada) {
            return res.status(404).json({ error: "Ruta no encontrada" });
        }

        res.json({ mensaje: "Ruta eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
