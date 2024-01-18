import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import boardData from '~/data/board.json';
import { v4 as uuid } from "uuid";

export const useBoardStore = defineStore('boardStore', () => {
  const board = useStorage('board', boardData);
  /*
  * Tasks
   */
  const getTask = computed(() => {
    return taskId => {
      for (const column of board.value.columns) {
        const task= column.tasks.find(
          task => task.id === taskId
        )
        if (task) return task
      }
    }
  })

  function addTask({ columnIndex, taskName }) {
    board.value.columns[columnIndex].push({
      id: uuid(),
      name: taskName,
      description: ''
    });
  }

  /*
  * Columns
   */
  function addColumn(columnName) {
    board.value.columns.push({
      name: columnName,
      tasks: []
    });
  }

  function deleteColumn(columnIndex) {
    board.value.columns.splice(columnIndex, 1);
  }

  return {
    /* State */
    board,
    /* Getters */
    getTask,
    /* Actions */
    addColumn,
    deleteColumn,
    addTask
  }
})