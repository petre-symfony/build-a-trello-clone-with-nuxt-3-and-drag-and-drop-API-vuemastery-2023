<script setup lang="ts">
  import { useBoardStore } from "~/store/boardStore";

  const boardStore = useBoardStore();
</script>

<template>
  <div class="boarrd-wrapper">
    <main class="board">
      <div v-for="column in boardStore.board.columns" :key="column.name" class="column">
        <h2>{{ column.name }}</h2>
        <ul>
          <li v-for="task in column.tasks" :key="task.id">
            <strong>{{ task.name }}</strong>
            <p>{{ task.description }}</p>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>