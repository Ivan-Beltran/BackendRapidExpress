
const express=require("express")
const router=express.Router()

const repartidorCtrl=require("../controllers/repartidor.controller")

router.get("/", repartidorCtrl.obtenerRepartidores)
router.post("/", repartidorCtrl.crearRepartidor);
router.put("/:id", repartidorCtrl.actualizarRepartidor);
router.delete("/:id", repartidorCtrl.eliminarRepartidor);
module.exports=router