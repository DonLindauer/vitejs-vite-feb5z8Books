<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="navbar">

        <div>
            <nav>
                <RouterLink to="/authors">Authors</RouterLink> -
                <RouterLink to="/books">Books</RouterLink> -
                <RouterLink to="/settings">Settings</RouterLink> -
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped>
</style>
