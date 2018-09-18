<template>
    <nav class="navbar sticky-top navbar-light bg-light">
        <router-link :to="{ name: 'home'}" class="navbar-brand">todo APP</router-link>
    </nav>
</template>

<script>
export default {
    name: 'page-nav-bar',
    components: {

    }
}
</script>