const express= require("express")
const router=express.Router()

const rutaCtrl=require('../controllers/ruta.controller')

router.get("/", rutaCtrl.obtenerRutas);
router.post("/", rutaCtrl.crearRuta);
router.put("/:id", rutaCtrl.actualizarRuta);
router.delete("/:id", rutaCtrl.eliminarRuta);

module.exports = router;