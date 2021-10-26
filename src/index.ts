import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./router/task.routes";
import cors from 'cors'
import { dbConection } from "./db/conection";
import playlistsRoutes from "./router/playlists.routes";
import 'reflect-metadata'

const app = express()

app.use(cors())
app.use(express.json())
dotenv.config({path: './.env'})
dbConection()

app.set('port', process.env.PORT || 3000)
let port = app.get('port')

app.use('/api/', [taskRoutes(), playlistsRoutes()])

app.listen(port, ()=>{
    console.log(`Online on port ${process.env.PORT}`)
})