<template>
  <h1>Show</h1>
</template>


<script>
  import TodoStore from "../todo-store";
  export default {
    name: 'todo-show',
    computed: {
      todo(){
        return TodoStore.state.todos
      }
    }
  }
</script>