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
      <UContainer v-for="(column, columnIndex) in boardStore.board.columns" :key="column.name" class="column">
        <div class="column-header mb-4">
          <div>
            <UInput v-if="editNameState" type="text" v-model="column.name" />
            <h2 v-else>{{ column.name }}</h2>
          </div>
          <div>
            <UButton
                icon="i-heroicons-pencil-square"
                class="mr-2"
                @click="editNameState = !editNameState"
            />
            <UButton
                icon="i-heroicons-trash" color="red"
                @click="deleteColumn(columnIndex)"
            />
          </div>
        </div>
        <ul>
          <li v-for="task in column.tasks" :key="task.id">
            <UCard class="mb-4">
              <strong>{{ task.name }}</strong>
              <p>{{ task.description }}</p>
            </UCard>
          </li>
        </ul>
      </UContainer>
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