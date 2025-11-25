const express= require("express")
const router=express.Router()

const envioCtrl=require('../controllers/Envios.controller')

router.get("/",envioCtrl.obtenerEnvios)
router.post("/",envioCtrl.crearEnvios)
router.put("/:id",envioCtrl.actualizarEnvios)
router.delete("/:id",envioCtrl.eliminarEnvios)


module.exports=router