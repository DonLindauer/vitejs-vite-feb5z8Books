<script setup>
    import { useRoute } from 'vue-router'
    import { storeToRefs } from 'pinia'
    import { useBookStore } from '../stores/book'
    import ShowHideSlider from '../components/ShowHideSlider.vue';

    const route = useRoute()
    const { book } = storeToRefs(useBookStore())
    const { fetchBook, getBookById } = useBookStore()

    fetchBook(route.params.id)

    function handleCustomChange(s) {
        document.getElementById("moreDiv").classList.toggle("hide");
    }
</script>

<template>
    <div v-if="book">
        <div>{{book.bookTitle}}</div>
        <div>Id: {{book.bookId}}</div>

        <hr />
        <show-hide-slider @custom-change="handleCustomChange"></show-hide-slider>
        <hr />
        <div id="moreDiv">
            <h2>Just Kidding</h2>
        </div>
    </div>
</template>

<style scoped>
    .hide {
        display: none;
    }
</style>