<script setup lang="ts">
  import { useBoardStore } from "~/store/boardStore";

  const boardStore = useBoardStore();

  const newColumnName = ref('');
  const editNameState = ref(false);

  function addColumn() {
    boardStore.addColumn(newColumnName.value);
    newColumnName.value = '';
  }

  function deleteColumn(columnIndex)  {
    boardStore.deleteColumn(columnIndex);
  }
</script>

<template>
  <div class="boarrd-wrapper">
    <main class="board">
      <BoardColumn
          v-for="(column, columnIndex) in boardStore.board.columns"
          :key="column.name"
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
  </div>
</template>

<style scoped>

</style>