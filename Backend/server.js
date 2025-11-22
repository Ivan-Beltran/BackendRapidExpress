const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const conectarBD=require("./config/database")

dotenv.config()
conectarBD()

const app= express()

app.use(cors())
app.use(express.json())

app.use("/api/clientes", require("./routes/Cliente.route"))
app.use("/api/envios", require("./routes/Envio.route"))
app.use("/api/rutas",  require("./routes/Ruta.route"))
app.use("/api/repartidores", require("./routes/Repartidor.route"))
app.use("/api/pagos", require("./routes/Pago.route"))

app.listen(process.env.PORT,()=>{
    console.log("servidor escuchando")
})