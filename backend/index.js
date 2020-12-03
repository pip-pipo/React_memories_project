// importing all necessary pacagess
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


// it for use routes path
import postsrouts from "./routes/posts.js";


// making instance of express
const app = express();


// all routers posts localhost:5000/posts
app.use('/posts' , postsrouts)

// bodyParser with limit 
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));

// cors for managin cross server request 
app.use(cors());

// for start with cluster
// Database access we have to make a  username and password
// Network access we have to  access ip address
// it will take connection url of mongodb cluster 
const CONNECTION_URL = "mongodb+srv://imran:imran@cluster0.f9huw.mongodb.net/<dbname>?retryWrites=true&w=majority";


// server PORT
const PORT = process.env.PORT || 5000 ;


// Connection with mongoose  
// it return promises
mongoose.connect(CONNECTION_URL , {useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>  app.listen(PORT , () => console.log(`server runing on Port ${PORT}`)))
    .catch((error)=>   console.log(error.messages));

