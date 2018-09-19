<template>
  <li class="list-group-item">
    {{todo.title}}

    <router-link :to="{ name: 'todo-show', params: { id:  todo.id } }">Edit</router-link>
  </li>
</template>

<script>
  export default {
    name: 'todos-item',
    components: {

    },
    props: {
      todo: Object
    },

    data () {
      return { }
    },
  }
</script>