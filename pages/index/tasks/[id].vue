<script setup>
  import { useBoardStore } from "~/store/boardStore";

  const route = useRoute();
  const boardStore = useBoardStore();

  const task = computed(() => boardStore.getTask(route.params.id))
</script>

<template>
  <div class="task-wrapper">
    <div class="task-view">
      <UInput type="text" v-model="task.name"/>
      <UTextarea v-model="task.description">{{ task.description }}</UTextarea>
    </div>
  </div>
</template>