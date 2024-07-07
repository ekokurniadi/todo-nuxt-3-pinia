<template>
  <main class="flex-1 p-4 bg-white">
    <header class="mb-4 flex items-center justify-between">
      <div class="flex space-x-2">
        <AppModal />
      </div>
    </header>
    <div v-show="loading" class="flex justify-center items-center">
      ...Loading
    </div>
    <div v-if="error">{{ error.message }}</div>
    <div class="space-y-4" v-if="!loading">
      <TodoItem
        v-for="item in todos"
        :key="item.id!"
        :todo="item"
        :markAsDone="() => updateTodo(item)"
        :deleteTodo="() => deleteTodo(item.id!)"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useTodosStore } from "~/stores/todos";
import { storeToRefs } from "pinia";
import AppModal from "~/components/AppModal.vue";
import TodoItem from "~/components/TodoItem.vue";

const todoStore = useTodosStore();
const { todos, loading,error } = storeToRefs(todoStore);

onMounted(async () => {
  await getTodos();
});

const getTodos = async () => {
  await todoStore.fetchTodos();
};

const updateTodo = async (item: Todo) => {
  let newItem = item;
  newItem.status = true;
  await todoStore.updateTodo(newItem);
};

const deleteTodo = async (id: number) => {
  await todoStore.deleteTodo(id);
};
</script>
