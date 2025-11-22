const Repartidor=require("../models/Repartidor")

exports.obtenerRepartidores = async (req, res) => {
    try {
        const repartidores = await Repartidor.find();
        res.json(repartidores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.crearRepartidor = async (req, res) => {
    try {
        const repartidor = await Repartidor.create(req.body);
        res.json(repartidor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.actualizarRepartidor = async (req, res) => {
    try {
        const { id } = req.params;

        const repartidorActualizado = await Repartidor.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!repartidorActualizado) {
            return res.status(404).json({ error: "Repartidor no encontrado" });
        }

        res.json(repartidorActualizado);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarRepartidor = async (req, res) => {
    try {
        const { id } = req.params;

        const repartidorEliminado = await Repartidor.findByIdAndDelete(id);

        if (!repartidorEliminado) {
            return res.status(404).json({ error: "Repartidor no encontrado" });
        }

        res.json({ mensaje: "Repartidor eliminado", repartidorEliminado });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
