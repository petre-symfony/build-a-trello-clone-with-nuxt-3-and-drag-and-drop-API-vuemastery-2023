<script setup lang="ts">
  import { useBoardStore } from "~/store/boardStore";

  const boardStore = useBoardStore();

  const newColumnName = ref('');

  const route = useRoute();

  const isModalOpen = computed(() => {
    return route.name ===
  });
  
  function addColumn() {
    boardStore.addColumn(newColumnName.value);
    newColumnName.value = '';
  }
</script>

<template>
  <div class="boarrd-wrapper">
    <main class="board">
      <BoardColumn
          v-for="(column, columnIndex) in boardStore.board.columns"
          :key="column.id"
          :column="column"
          :columnIndex="columnIndex"
      />
      <UContainer class="column">
        <UInput
            v-model="newColumnName"
            type="text"
            placeholder="Create new column"
            icon="i-heroicons-plus-circle-solid"
            @keyup.enter="addColumn"
        />
      </UContainer>
    </main>
    <div v-show="isModalOpen" class="task-bg">
      <NuxtPage :key="route.fullPath"/>
    </div>
  </div>
</template>

<style scoped>

</style>