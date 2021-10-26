import { Request, Response } from "express";
import { playlists } from "../db/models/playlists";

export const getPlaylists = async (req: Request, res: Response) => {
    playlists.find().then((data)=>{
        res.json(data)
    })
}