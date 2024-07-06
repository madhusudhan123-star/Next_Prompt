import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


export const GET = async (request,{ params }) => {
    try {
        await connectToDB()

        const prompts = await Prompt.findById(params.id).populate("creator")
        if(!prompts) return new Response("Prompt not found", { status: 404 })
        
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 



export const PATCH = async (request, {params}) => {
    const {prompt, tag} = await request.json()
    try {
        await connectToDB()
        const prompts = await Prompt.findById(params.id)
        if(!prompts) return new Response("Prompt not found", { status: 404 })
        prompts.prompt = prompt
        prompts.tag = tag
        await prompts.save()
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}

export const DELETE = async (request, {params}) => {
    try {
        await connectToDB()
        await Prompt.findByIdAndDelete(params.id);
        return new Response("Prompt deleted successfully", { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}