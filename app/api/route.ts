
import ConnectDB from "../utils/ConnectDB"
import Task from "@/app/utils/model/Task"

export const GET = async (req: Request) => {

    await ConnectDB(); 
    const allTasks = await Task.find({}).sort({ createdAt: -1 }); 
    if (!allTasks) {
        return new Response("No tasks found", { status: 404 });
    }
    return new Response(JSON.stringify(allTasks), { status: 200 });
}           

export const POST = async (req: Request) => {
    await ConnectDB(); 
    const { title, description, date, completed } = await req.json();
    
    if (!title || !description) {
        return new Response("Title and description are required", { status: 400 });
    }

    try {
        const newTask = new Task({
            title,
            description,
            date,
            completed
        });

        await newTask.save();
        return new Response(JSON.stringify(newTask), { status: 201 });
    } catch (error) {
        return new Response("Failed to create task", { status: 500 });
    }
}