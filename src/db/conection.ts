import { createConnection } from 'typeorm'
import { playlists } from './models/playlists';
import { tasks } from "./models/tasks";

export const dbConection = ()=>{

    createConnection(
        {
            type: "mysql",
            host: process.env.HOST,
            port: parseInt(<string>process.env.DB_PORT),
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            logging: false,
            synchronize: true,
            entities: [
                tasks,
                playlists
            ]
        }
    )
}