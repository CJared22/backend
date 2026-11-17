
import * as bookModels from '../models/bookModel.js';

// Retrieve all books
export const fetchAllBooks = async () => {
    const books = await bookModels.fetch();
    return books;
};


// Check if book exists
const doesBookExist = async (book) => {
    let existing;

    if (Object.hasOwn(book, "id")) {
        existing = await bookModels.findBookById(book.id);
    } else {
        existing = await bookModels.findBookByNameAndAuthor(
            book.name,
            book.author
        );
    }

    if (existing.length > 0) {
        return true;
    }

    return false;
};


// Create book
export const createBook = async (book) => {
    if (!book.name || !book.author) {
        throw new Error('Name and Author is required');
    }

    const existing = await doesBookExist(book);

    if (existing) {
        throw new Error('Book already exist!');
    }

    const bookId = await bookModels.insert(book);
    return bookId;
};


// Update book
export const updateBook = async (book) => {
    if (!book.name || !book.author) {
        throw new Error('Name and Author is required');
    }

    const existing = await doesBookExist(book);

    if (!existing) {
        throw new Error('Book does not exist!');
    }

    const updatedBook = await bookModels.update(book);
    return updatedBook;
};


// Delete book
export const deleteBook = async (id) => {
    const book = { id };

    const existing = await doesBookExist(book);

    if (!existing) {
        throw new Error('Book does not exist!');
    }

    const deletedBook = await bookModels.remove(id);
    return deletedBook;
};
