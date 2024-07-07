<template>
  <div>
    <button
      @click="showModal = true"
      class="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Add Todo
    </button>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white rounded-lg p-6 shadow-lg lg:w-1/2 w-full mx-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Add New Todo</h2>
          <button
            @click="showModal = false"
            class="text-gray-500 hover:text-gray-700"
          >
            <span class="material-icons">close</span>
          </button>
        </div>
        <form @submit.prevent="addTodo">
          <div class="mb-4">
            <input
              v-model="newTodo"
              type="text"
              id="todo"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              placeholder="Enter todo item"
            />
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded mr-2"
            >
              Save
            </button>
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const showModal = ref(false);
const newTodo = ref("");
const todoStore = useTodosStore();

const addTodo = async () => {
  const todo: TodoInput = {
    task: newTodo.value,
    status: false,
  };
  todoStore.addTodo(todo);
  showModal.value = false;
  newTodo.value = "";
};
</script>
