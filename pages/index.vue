<script setup lang="ts">
  import { useBoardStore } from "~/store/boardStore";

  const boardStore = useBoardStore();

  const newColumnName = ref('');

  const route = useRoute();
  const router = useRouter();

  const isModalOpen = computed(() => {
    return route.name === 'index-tasks-id';
  });
  
  function addColumn() {
    boardStore.addColumn(newColumnName.value);
    newColumnName.value = '';
  }

  function closeModal() {
    router.push('/');
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
    <div v-show="isModalOpen" class="task-bg" @click.self="closeModal">
      <NuxtPage :key="route.fullPath"/>
    </div>
  </div>
</template>