<script setup>
  const route = useRoute();
</script>

<template>
  <div class="task-wrapper">
    <div class="task-view">
      <h1>Page: {{ route.params.id }}</h1>
    </div>
  </div>
</template>