<template>
  <main>
    <h1>Hello, {{ name }}</h1>
    <PostTable />
    <NuxtLink to="/todo-list">&gt;Go To ToDo List Page!</NuxtLink>
  </main>
</template>

<script setup lang="ts">
  const name = "user" + Math.floor(Math.random() * 100);
</script>
