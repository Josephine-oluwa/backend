import express, { Application } from "express"
import { mainApp } from "./mainApp";

const app: Application = express()
const port: number = 3355;

mainApp(app);
const server = app.listen(process.env.PORT || port, () => {
  console.log();
  
});

process.on("uncaughtException" , (error:Error) => {
    console.log("unCaughtException")
    console.log()

    process.exit(1)
})


process.on("onHandledRejection", (Reason: any)=> {
     console.log("unHandledRejection")
     console.log()

     server.close(()=>{
        process.exit(1)
     })
})

