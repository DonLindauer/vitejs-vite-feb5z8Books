import { defineStore } from 'pinia'
import { Book } from "../assets/classes.js";
import bookData from '../assets/books.json'

export const useBookStore = defineStore({
    id: 'book',
    state: () => ({
        loaded: false,
        book: null,
        books: []
    }),
    getters: {
    },
    actions: {
        buildFromJson() {
            if (this.loaded)
                return;

            for (var j = 0; j < bookData.length; j++) {
                var book = bookData[j];

                this.books.push(new Book(j, book.author.first, book.author.last, book.book));
            }

            this.books = this.books.sort((a, b) => {
                return (a["bookTitle"] > b["bookTitle"]) ? 1 : -1;
            });

            this.loaded = true;
        },
        getBookById(id) {
            if (!this.loaded)
                this.buildFromJson();

            var thisBook = this.books.find((book) => (book.bookId == id));

            return thisBook;
        },
        getBooksByAuthor(firstName, lastName) {
            if (!this.loaded)
                this.buildFromJson();

            return this.books.filter((book) => ((book.firstName == firstName) && (book.lastName == lastName)));
        },
        fetchBook(id) {
            this.book = this.getBookById(id);
        },
    }
})
