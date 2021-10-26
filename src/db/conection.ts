import { createConnection } from 'typeorm'
import { playlists } from './models/playlists';
import { tasks } from "./models/tasks";
import dotenv from "dotenv";
dotenv.config({path: './.env'})

export const dbConection = async ()=>{

    await createConnection(
        {
            type: "mysql",
            host: process.env.BD_HOST,
            port: parseInt(<string>process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.BD_PASSWORD,
            database: process.env.DB_DATABASE,
            logging: false,
            synchronize: true,
            entities: [
                tasks,
                playlists
            ]
        }
    ).catch((err)=>{
        console.log(err)
    })

}