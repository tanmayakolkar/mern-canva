const express=require('express')
const app=express()
const cors=require('cors')
const dotEnv=require('dotenv')
const mongoose  = require('mongoose')
const fs=require('fs')
const path=require('path')

//configure cors
app.use(cors())

// configure form data
app.use(express.json())

//configure .dotEnv
dotEnv.config({path:'./.env'})

const hostname=process.env.HOST_NAME
const port=process.env.PORT

//connect to data base
// mongoose.connect('mongodb://127.0.0.1:27017/canva').then((response)=>
// {
//     console.log(`MongoDB Connected: {conn.connection.host}`);
// }).catch((error)=>
// {
//     console.error(error.message);
//     process.exit(1);

// })

if(process.env.NODE_ENV==='production')
{
   app.use(express.static(path.join(__dirname,"./frontend/dist")))
   app.get("*",(req,res)=>
   {
       res.sendFile(path.resolve(__dirname,"./","frontend","dist","index.html"))
   })
}

let dbConnect=async()=>
{
   try{
    if(process.env.NODE_ENV==='local')
        {
           await mongoose.connect(process.env.MONGO_DB_LOCAL_URL)
           console.log(" local data base connect")
        }
        else{
            await mongoose.connect(process.env.MONGO_DB_URL)
            console.log("production data base connect")
    }
   }
   catch(error)
   {
    console.log(error)
   }
}

dbConnect()






app.get('/',(request,response)=>
{
   response.send(`<h1>Welcome to backend application</h1>`)
})

app.listen(port,hostname,()=>
{
    console.log(`server is startet http://${hostname}:${port}`)
})