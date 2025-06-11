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

// let dbConnect=async()=>
// {
//    console.log("ddfsfdsfdsfs",process.env.NODE_ENV)
//    try{
//     if (process.env.NODE_ENV === 'local') {
//     await mongoose.connect(process.env.MONGO_DB_LOCAL_URL);
//     console.log("✅ Connected to Local MongoDB");
// } else {
//     await mongoose.connect(process.env.MONGO_DB_URL);
//     console.log("✅ Connected to Production MongoDB");
// }

//    }
//    catch(error)
//    {
//     console.log(error)
//    }
// }

let dbConnect = async () => {
  console.log("NODE_ENV:", process.env.NODE_ENV);
  try {
    if (process.env.NODE_ENV === 'local') {
      await mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("✅ Connected to Local MongoDB");
    } else {
      await mongoose.connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("✅ Connected to Production MongoDB");
    }
  } catch (error) {
    console.log("❌ MongoDB connection error:", error.message);
  }
};


dbConnect()


app.get('/',(request,response)=>
{
   response.send(`<h1>Welcome to backend application</h1>`)
})

app.listen(port,hostname,()=>
{
    console.log(`server is startet http://${hostname}:${port}`)
})