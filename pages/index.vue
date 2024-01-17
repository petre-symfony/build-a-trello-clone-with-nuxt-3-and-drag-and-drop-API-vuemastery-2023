<script setup lang="ts">
  import { useBoardStore } from "~/store/boardStore";

  const boardStore = useBoardStore();

  const newColumnName = ref('');
  const editNameState = ref(false);

  function addColumn() {
    boardStore.addColumn(newColumnName.value);
    newColumnName.value = '';
  }
</script>

<template>
  <div class="boarrd-wrapper">
    <main class="board">
      <UContainer v-for="column in boardStore.board.columns" :key="column.name" class="column">
        <div class="column-header">
          <div>
            <UInput v-if="editNameState" type="text" v-model="column.name" />
            <h2 v-else class="mb-4">{{ column.name }}</h2>
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
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