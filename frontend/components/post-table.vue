<template>
  <table>
    <caption>Posts</caption>
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">body</th>
        <th scope="col">userId</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <th scope="row">{{ post.id }}</th>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
        <td>{{ post.userId }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
  const { data: posts } = useFetch("/api/placeholder/posts");
</script>

<style scoped>
table, th, td {
  border-collapse: collapse;
  border: 1px gray solid;
}
caption {
  color: gray;
}
</style>