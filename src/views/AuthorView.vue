<script setup>
    import { useRoute } from 'vue-router'
    import { storeToRefs } from 'pinia'
    import { useAuthorStore } from '../stores/author'
    import { useBookStore } from '../stores/book'

    import ShowHideSlider from '../components/ShowHideSlider.vue';

    const route = useRoute()
    const { author } = storeToRefs(useAuthorStore())
    const { fetchAuthor, getAuthorById } = useAuthorStore()
    const { getBooksByAuthor } = useBookStore()

    fetchAuthor(route.params.id)

    function handleCustomChange(s) {
        document.getElementById("moreDiv").classList.toggle("hide");
    }

    var authorBooks = getBooksByAuthor(author.value.firstName, author.value.lastName);
</script>

<template>
    <div v-if="author">
        <div>{{author.name}}</div>
        <div>Id: {{author.authorId}}</div>

        <hr />
        <show-hide-slider @custom-change="handleCustomChange"></show-hide-slider>
        <hr />
        <div id="moreDiv">
            <h2>Books by {{ author.firstName }} {{ author.lastName }}:</h2>
            <div id="resultDiv">
                <div v-if="authorBooks.length > 0" v-for="(book, index) in authorBooks">
                    {{ index }}. <RouterLink :to="`/book/${book.bookId}`">{{ book.bookTitle }}</RouterLink>
                </div>
                <div v-else>Currently there are no books by this author.</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .hide {
        display: none;
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