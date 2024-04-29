// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'
import connectdb from "./db/index.js";
import express from 'express'

import { app } from './app.js';

dotenv.config({
    path: './env'
})

connectdb()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on ${process.env.PORT}`)
        })
    })
    .catch((e)=>{
        console.log(`MongoDB connection failed !!` , e)
    })