import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { tasks } from "../db/models/tasks";

// Tasks Controllers
export const getTasks = async (req: Request, res: Response)=>{
    await tasks.find().then((data)=>{
        res.json(data)
    })
}

export const getPenddingTasks = async (req: Request, res: Response)=>{
    await tasks.find({task_done: false}).then((data)=>{
        res.json(data)
    })
}

export const getDoneTasks = async (req: Request, res: Response)=>{
    await tasks.find({task_done: true}).then((data)=>{
        res.json(data)
    })
}

export const getTask = async (req: Request, res: Response)=>{
    res.json(await tasks.findOne(req.params.id))
}

export const PostTask = async (req: Request, res: Response)=>{
    await tasks.insert({
        "task": req.body.task,
    })
    
    res.end()
}

export const deleteTask = async (req: Request, res: Response)=>{
    await tasks.delete({ id: parseInt(req.params.id) });

    res.end()
}

export const updateTask = async (req: Request, res: Response)=>{
        
    const task = await getRepository(tasks).findOne(req.params.id);

    if (task) {
        getRepository(tasks).merge(task, {task_done: !task.task_done});
        const results = await getRepository(tasks).save(task);
        return res.json(results);
    }

    return res.json({msg: 'Not task found'});

}
