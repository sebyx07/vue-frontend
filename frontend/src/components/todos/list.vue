<template>
  <ul class="list-group">
    <todos-item v-for="todo in todos" :key="todo.id" v-bind:todo="todo"></todos-item>
  </ul>
</template>

<script>
  import TodosStore from "../../todo-store";
  import TodosItem from "./item";
  export default {
    name: 'todos-list',
    components: {
      TodosItem

    },

    created() {
      TodosStore.dispatch("fetchTodos")
    },

    computed: {
      todos(){
        return TodosStore.state.todos;
      }
    }
  }
</script>