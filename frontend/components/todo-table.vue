<template>
  <table>
    <caption>Todos</caption>
    <thead>
      <tr>
        <th scope="col">done</th>
        <th scope="col">id</th>
        <th scope="col">text</th>
        <th scope="col">createdAt</th>
        <th scope="col">updatedAt</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.checked }}</td>
        <th scope="row"><NuxtLink :to="todo.id">{{ todo.id }}</NuxtLink></th>
        <td>{{ todo.text }}</td>
        <td>{{ todo.createdAt }}</td>
        <td>{{ todo.updatedAt }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
  const { data: todos } = useFetch("/api/backend/get-todos");
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