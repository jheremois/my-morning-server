import { Router } from "express";
import { 
    getTasks,
    getPenddingTasks,
    getDoneTasks,
    getTask,
    PostTask,
    deleteTask,
    updateTask
} from "../controllers/tasks.controller";

const router = Router()

const taskRoutes = ()=>{

    router.get('/tasks', getTasks)

    router.get('/tasks/pendding', getPenddingTasks)

    router.get('/tasks/done', getDoneTasks)

    router.get('/task/:id', getTask)
    
    router.post('/task', PostTask)

    router.delete('/task/:id', deleteTask)
    
    router.put('/task/:id', updateTask)

    return router
}

export default taskRoutes