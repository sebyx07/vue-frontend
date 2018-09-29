<template>
  <TodosList></TodosList>
</template>

<script>
  import TodosList from "../components/todos/list";
  export default {
    name: 'home',
    components: {
      TodosList
    }
  }
</script>
