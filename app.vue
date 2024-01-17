<script setup>
  const route = useRoute();
  console.log(route.name);
</script>
<template>
  <Html class="bg-emerald-500">
    <div>
      <NuxtPage />
    </div>
  </Html>
</template>
