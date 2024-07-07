<template>
  <div class="bg-white shadow p-4 rounded flex items-center space-x-4">
    <div>
      <del v-if="props.todo.status">
        <h3 class="font-bold">{{ props.todo.task }}</h3>
      </del>
      <h3 v-else class="font-bold">{{ props.todo.task }}</h3>
      <div class="text-sm text-gray-500">{{ formatDateToIndonesian(props.todo.created_at!)}}</div>
      <button
        v-if="!props.todo.status"
        type="button"
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded text-sm px-5 py-2 text-center mt-2 mb-2 mr-2"
        @click="markAsDone"
      >
        Done
      </button>

      <button
        class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded text-sm px-5 py-2 text-center mt-2"
        @click="deleteTodo"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  todo: Todo;
  markAsDone: () => void;
  deleteTodo: () => void;
}>();
</script>
