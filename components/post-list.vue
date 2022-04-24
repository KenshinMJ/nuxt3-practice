<template>
  <ol>
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ol>
</template>

<script setup lang="ts">
  const { data: posts } = useFetch("/api/placeholder/posts");
</script>