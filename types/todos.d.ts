declare interface Todo {
    status: boolean | null;
    created_at: string | null;
    id: number;
    task: string | null;
}

declare interface TodoInput {
    task: string,
    status: boolean,
}