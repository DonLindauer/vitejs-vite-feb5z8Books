<script setup>
    import { RouterLink } from 'vue-router'
    import { storeToRefs } from 'pinia'
    import { useAuthorStore } from '../stores/author'
    import { ref, computed } from 'vue'

    const { authors } = storeToRefs(useAuthorStore())
    const { buildFromJson } = useAuthorStore()

    buildFromJson()

    var searchAuthor = ref("");

    var filteredAuthors = computed(() => {
        if (searchAuthor.value.length < 3)
            return [];

        return authors.value.filter((author) => ((author.lastName.startsWith(searchAuthor.value))));
    })
</script>

<template>
    <main>
        <input v-model="searchAuthor">
        <hr />
        <h1>Authors: {{ searchAuthor }}</h1>
        <div id="resultDiv">
            <div v-if="filteredAuthors" v-for="author in filteredAuthors" :key="author.authorId">
                <RouterLink :to="`/author/${author.authorId}`">{{ author.name }}</RouterLink>
            </div>
        </div>
    </main>
</template>

<style scoped>
    input {
        background-color: steelblue;
        color:white;
        padding:5px;
    }

    #resultDiv {
        margin: 4px, 4px;
        padding: 4px;
        background-color: beige;
        width: 600px;
        height: 500px;
        overflow-x: hidden;
        overflow-y: auto;
        text-align: justify;
    }
</style>