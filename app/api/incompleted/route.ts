import ConnectDB from "@/app/utils/ConnectDB";
import Task from "@/app/utils/model/Task";

export const GET = async (req: Request) => {

    await ConnectDB(); 
    const incompletedTasks = await Task.find({ completed: false }).sort({ createdAt: -1 }); 
    if (!incompletedTasks) {
        return new Response("No incompleted tasks found", { status: 404 });
    }
    return new Response(JSON.stringify(incompletedTasks), { status: 200 });
}