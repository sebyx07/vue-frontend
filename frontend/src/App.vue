<template>
  <div id="app">
    <page-nav-bar></page-nav-bar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
    import PageNavBar from "./components/page/nav-bar";
    export default {
        components: {PageNavBar}
    }
</script>
