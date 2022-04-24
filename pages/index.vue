<template>
  <main>
    <h1>Hello, {{ name }}</h1>
    <PostTable />
  </main>
</template>


<script setup lang="ts">
  const name = "user" + Math.floor(Math.random() * 100);
</script>
