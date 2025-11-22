const express= require("express")
const router=express.Router()

const envioCtrl=require('../controllers/Envios.controller')

router.get("/",envioCtrl.obtenerEnvios)
router.post("/",envioCtrl.crearEnvios)
router.put("/",envioCtrl.actualizarEnvios)
router.delete("/",envioCtrl.eliminarEnvios)


module.exports=router