const express =require('express');
const app=express();
const cors=require('cors')

app.use(cors())
app.use(express.json());

const router=require('./config/routes')
app.use(router)

const port=process.env.PORT || 3088

const configureDB=require('./config/database')

configureDB()


app.listen(port,()=>{
    console.log("Server Running On Port" , port)
})