import { defineStore } from 'pinia'
import { Author } from "../assets/classes.js";
import authorData from '../assets/authors.json'

const sortArrayOfObjects = (arr) => {
    const sortedArr = arr.sort((a, b) => {
        var result = 0;

        if (a["lastName"] == b["lastName"]) {
            result = (a["firstName"] > b["firstName"]) ? 1 : -1;
        } else
            result = (a["lastName"] > b["lastName"]) ? 1 : -1;

        return result;
    });

    return sortedArr;
};

export const useAuthorStore = defineStore({
    id: 'author',
    state: () => ({
        loaded: false,
        author: null,
        authors: []
    }),
    getters: {
    },
    actions: {
        buildFromJson() {
            if (this.loaded)
                return;

            for (var j = 0; j < authorData.length; j++) {
                var author = authorData[j];

                this.authors.push(new Author(j, author.first, author.last));
            }

            this.authors = sortArrayOfObjects(this.authors);

            this.loaded = true;
        },
        getAuthorById(id) {
            if (!this.loaded)
                this.buildFromJson();

            var thisAuthor = this.authors.find((author) => (author.authorId == id));

            return thisAuthor;
        },
        fetchAuthor(id) {
            this.author = this.getAuthorById(id);
        },
    }
})
