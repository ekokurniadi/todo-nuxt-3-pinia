import supabase from "~/utils/supabase_client";
import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
    const method = event.method
    switch (method) {
        case 'GET':
            return await getTodo();
        case 'POST':
            return await addTodo(event);
        case 'PUT':
            return await updateTodo(event);
        case 'DELETE':
            return await deleteTodo(event);
        default:
            throw createError({ statusCode: 405, message: 'Method Not Allowed' })
    }
})

const getTodo = async () => {
    const { data: todos, error } = await supabase.from('todo_table').select('*').order('id', { ascending: false })
    if (error) throw createError({ statusCode: 500, message: error.message })
    return todos;
}

const addTodo = async (event: any) => {
    const postBody = await readBody(event);
    const { data: data, error: postError } = await supabase.from('todo_table').insert(postBody).select()
    if (postError) throw createError({ statusCode: 500, message: postError.message })
    return data[0];
}

const updateTodo = async (event: any) => {
    const putBody = await readBody(event);
    const { id, ...updates } = putBody
    const { data: updateData, error: putError } = await supabase.from('todo_table').update(updates).eq('id', id).select()
    if (putError) throw createError({ statusCode: 500, message: putError.message })
    return updateData[0]
}

const deleteTodo = async (event: any) => {
    const param = getQuery(event);
    const { id: deleteId } = param
    const { data: deleteData, error: deleteError } = await supabase.from('todo_table').delete().eq('id', deleteId!)
    if (deleteError) throw createError({ statusCode: 500, message: deleteError.message })
    return deleteData
}