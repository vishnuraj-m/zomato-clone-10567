import express from "express";
import dotenv from "dotenv";

// Database connection
import ConnectDB from "./database/connection";

dotenv.config();

const zomato = express();
const PORT = 4000;

zomato.use(express.json());

zomato.get("/", (req, res) => {
    res.json({
        message: "Server is running",
    });
});
zomato.listen(PORT, () => {
    // ConnectDB()
    // .then(()=>{
    //     console.log("server is running !!!");
    // })
    // .catch((error)=>{
    //     console.log('Server is running, database connection failed...');
    //     console.log(error);
    // })

    console.log("server is running !!!");
});