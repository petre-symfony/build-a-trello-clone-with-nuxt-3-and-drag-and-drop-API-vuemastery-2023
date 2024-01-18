<script setup>
  import { useBoardStore } from "~/store/boardStore";

  const route = useRoute();
  const router = useRouter();
  const boardStore = useBoardStore();

  const task = computed(() => boardStore.getTask(route.params.id))

  function deleteTask() {
    boardStore.deleteTask(route.params.id);
    router.push('/');
  }
</script>

<template>
  <div class="task-wrapper">
    <div v-if="task" class="task-view">
      <UFormGroup label="name" class="mb-4 w-full">
        <UInput type="text" v-model="task.name"/>
      </UFormGroup>
      <UFormGroup label="description" class="mb-4 w-full">
        <UTextarea v-model="task.description" />
      </UFormGroup>
      <UButton
          icon="i-heroicons-trash"
          color="red"
          @click="deleteTask"
      >Delete task</UButton>
    </div>
    <div v-else>
      <p>Task not found</p>
    </div>

  </div>
</template>