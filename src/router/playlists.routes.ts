import { Router } from "express";
import { getPlaylists } from "../controllers/playlists.controller";

const router = Router()

const playlistsRoutes = ()=>{
    
  router.get('/playlists', getPlaylists)

  return router
}

export default playlistsRoutes