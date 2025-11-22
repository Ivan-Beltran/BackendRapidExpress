const mongoose=require("mongoose")

const conectarBD=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("conectado al server")
    } catch(error){
        console.log("error",error)
        process.exit(1)
    }
}

module.exports=conectarBD