import ConnectDB from "@/app/utils/ConnectDB";
import Task from "@/app/utils/model/Task"

export const GET = async (req : Request, { params } : { params: { id: string } }) => {
    const { id } = params;

    await ConnectDB(); 
    const task = await Task.findById(id);
    if (!task) { 
        return new Response("Task not found", { status: 404 });
    }
    return new Response(JSON.stringify(task), { status: 200 });
}

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
    const { id } = params;

    await ConnectDB(); 
    const { title, description, date, completed } = await req.json();

    if (!title || !description) {
        return new Response("Title and description are required", { status: 400 });
    }

    try {
        const updatedTask = await Task.findByIdAndUpdate(id, {
            title,
            description,
            date,
            completed
        }, { new: true });

        if (!updatedTask) {
            return new Response("Task not found", { status: 404 });
        }

        return new Response(JSON.stringify(updatedTask), { status: 200 });
    } catch (error) {
        return new Response("Failed to update task", { status: 500 });
    }
}   

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    const  id  = params.id;

    await ConnectDB(); 
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
        return new Response("Task not found", { status: 404 });
    }

    return new Response("Task deleted", { status: 200 });
}   
