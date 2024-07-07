interface State {
    todos: Todo[]
    loading: boolean
    error: Error | null
}
export const useTodosStore = defineStore('todoStore', {
    state: (): State => ({
        todos: [],
        loading: false,
        error: null,
    }),
    actions: {
        async fetchTodos() {
            this.loading = true
            try {
                let data = await $fetch<Todo[]>('/api/todo')
                this.todos = data
            } catch (err) {
                this.error = err as Error
            } finally {
                this.loading = false
            }
        },
        async addTodo(todo: TodoInput) {
            this.loading = true
            try {
                const { data, error } = await useFetch<Todo>('/api/todo', {
                    method: 'POST',
                    body: JSON.stringify(todo),
                })
                if (error.value) throw error.value
                this.todos.push(data.value!);
            } catch (err) {
                this.error = err as Error
            } finally {
                this.loading = false
            }
        },
        async updateTodo(todo: Todo) {
            this.loading = true
            try {
                const { data, error } = await useFetch<Todo>('/api/todo', {
                    method: 'PUT',
                    body: JSON.stringify(todo),
                })
                if (error.value) throw error.value
                const index = this.todos.findIndex((t) => t.id === todo.id);
                if (index !== -1) this.todos[index] = data.value!;
            } catch (err) {
                this.error = err as Error
            } finally {
                this.loading = false
            }
        },
        async deleteTodo(id: number) {
            this.loading = true
            try {
                const { data, error } = await useFetch<Todo>(`/api/todo?id=${id}`, {
                    method: 'DELETE',
                })
                if (error.value) throw error.value
                this.todos = this.todos.filter((todo) => todo.id !== id)
            } catch (err) {
                this.error = err as Error
            } finally {
                this.loading = false
            }
        },
    }

})