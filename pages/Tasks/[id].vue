<script setup>
  import { useBoardStore } from "~/store/boardStore";

  const route = useRoute();
  const boardStore = useBoardStore();

  const task = computed(() => boardStore.getTask(route.params.id))
</script>

<template>
  <div class="task-wrapper">
    <div class="task-view">
      <h1>Page: {{ task }}</h1>
    </div>
  </div>
</template>