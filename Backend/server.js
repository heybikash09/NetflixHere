import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.router.js'
import { ENV_VARS } from './config/envVars.js'
import { connectDB } from './config/dbConnect.js'
import movieRouter from './routes/movie.router.js'
import tvRouter from './routes/tv.router.js'
import searchRouter from './routes/search.router.js'
import cookieParser from 'cookie-parser'
import { protectRoute } from './middleware/protectRoute.js'
import path from 'path'
const __dirname=path.resolve()

const app = express()
app.use(cors())
app.use(cors({
    origin: '*', // Allow frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(cookieParser())//for access cookie 
app.use(express.urlencoded({ extended: true })) //for urlencoded data 
app.use(express.json())// allow us to parse req body 


const port = ENV_VARS.PORT

app.use('/api/v1/auth',authRouter)
 app.use('/api/v1/movie',protectRoute, movieRouter)
 app.use('/api/v1/tv',protectRoute, tvRouter)
 app.use('/api/v1/search',protectRoute, searchRouter)


// app.use(express.static(path.join(__dirname,'/Frontend/dist')))
// app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"Frontend","dist","index.html"))
// })
app.listen(port, () => {
    console.log('The server running at the port-->', port)
    connectDB()
})