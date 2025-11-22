const express= require("express")
const router=express.Router()
const clienteCtrl=require("../controllers/cliente.controller")

router.get("/",clienteCtrl.obtenerClientes)
router.post("/",clienteCtrl.crearCliente)
router.put("/:id", clienteCtrl.actualizarCliente)
router.delete("/:id",clienteCtrl.eliminarCliente)

module.exports=router