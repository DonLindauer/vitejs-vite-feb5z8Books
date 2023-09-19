<script setup>
    import { RouterLink } from 'vue-router'
    import { storeToRefs } from 'pinia'
    import { useBookStore } from '../stores/book'
    import { ref, computed } from 'vue'

    const { books } = storeToRefs(useBookStore())
    const { buildFromJson } = useBookStore()

    buildFromJson()

    var searchBook = ref("");

    var filteredBooks = computed(() => {
        if (searchBook.value.length < 3)
            return [];

        return books.value.filter((book) => ((new RegExp(searchBook.value, 'i')).test(book.bookTitle)));
    })
</script>

<template>
    <main>
        <input v-model="searchBook">
        <hr />
        <h1>Books: {{ searchBook }}</h1>
        <div id="resultDiv">
            <div v-if="filteredBooks" v-for="(book, index) in filteredBooks" :key="book.bookId">
                {{ index }}. <RouterLink :to="`/book/${book.bookId}`">{{ book.bookTitle }} - {{ book.author }}</RouterLink>
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
        width: 800px;
        height: 500px;
        overflow-x: hidden;
        overflow-y: auto;
        text-align: justify;
    }
</style>