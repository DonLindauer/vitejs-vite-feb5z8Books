export class Author {
    constructor(authorId, firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.authorId = authorId;

        this.name = lastName + ", " + firstName;
    }
}

export class Book {
    constructor(bookId, firstName, lastName, bookTitle) {
        this.bookId = bookId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bookTitle = bookTitle;

        this.author = lastName + ", " + firstName;
    }
}