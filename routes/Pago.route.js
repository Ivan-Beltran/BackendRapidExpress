const express = require("express");
const router = express.Router();

const pagoCtrl = require("../controllers/pago.controller");

router.get("/", pagoCtrl.obtenerPagos);
router.post("/", pagoCtrl.crearPago);
router.put("/:id", pagoCtrl.actualizarPago);
router.delete("/:id", pagoCtrl.eliminarPago);

module.exports = router;
