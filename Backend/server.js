import express from 'express'
import authRouter from './routes/auth.router.js'
import {ENV_VARS} from './config/envVars.js'
import { connectDB } from './config/dbConnect.js'
const app=express()
app.use(express.urlencoded({extended:true}))
const port=ENV_VARS.PORT
app.use('/api/v1/auth',authRouter)
app.listen(port,()=>{
    console.log('The server running at the port-->',port)
    connectDB()
})