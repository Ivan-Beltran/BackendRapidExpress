const Pago=require("../models/Pago")

exports.obtenerPagos= async(req,res)=>{
    try{
        const pagos= await Pago.find()
        res.json(pagos)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.crearPago = async (req, res) => {
    try {
        const pago = await Pago.create(req.body);
        res.json(pago);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarPago = async (req, res) => {
    try {
        const { id } = req.params;

        const pagoActualizado = await Pago.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!pagoActualizado) {
            return res.status(404).json({ error: "Pago no encontrado" });
        }

        res.json(pagoActualizado);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.eliminarPago = async (req, res) => {
    try {
        const { id } = req.params;

        const pagoEliminado = await Pago.findByIdAndDelete(id);

        if (!pagoEliminado) {
            return res.status(404).json({ error: "Pago no encontrado" });
        }

        res.json({ mensaje: "Pago eliminado", pagoEliminado });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};