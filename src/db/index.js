import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from 'express'

const connectdb = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('MongoDB connected !! Host:',connectionInstance.connection.host)
    }catch(e){
        console.log("err:",e)
        // process.exit(1)
    }
}

export default connectdb