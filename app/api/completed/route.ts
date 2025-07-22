import ConnectDB from "@/app/utils/ConnectDB";
import Task from "@/app/utils/model/Task";

export const GET = async (req: Request) => {

    await ConnectDB(); 
    const completedTasks = await Task.find({ completed: true }).sort({ createdAt: -1 }); 
    if (!completedTasks) {
        return new Response("No completed tasks found", { status: 404 });
    }    
    return new Response(JSON.stringify(completedTasks), { status: 200 });
}