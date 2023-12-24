import express from "express";
import mongoose from "mongoose";
import user_router from "./routes/user-routes.js";
// const user_router=require('./routes/user-routes')
// import user_routes from '/Users/priyanshipusan/web-dev/backend1/back/routes/user-routes.js';

const app = express();
app.use(express.json());
app.use("/api/user", user_router)
mongoose
  .connect(
    "mongodb+srv://admin:vMG1FqzgKL2YBIta@cluster0.rvilet4.mongodb.net/back?retryWrites=true&w=majority"
  )
  .then(() => app.listen(4000))
  .then(() =>
    console.log("Connected to database and listening to localhost 4000")
  )
  .catch((err) => console.log(err));
//middlewares
// app.use("/api",(req,res,next)=>{
// res.send("Hello World")
// })

//vMG1FqzgKL2YBIta
