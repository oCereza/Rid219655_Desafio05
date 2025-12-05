import bookRepository from "../repositories/book.repositories.js";

async function createBookService(newBook) {
    try {
        const createdBook = await bookRepository.createBookRepository(newBook);
        return createdBook;
    } catch (error) {
        throw new Error(`Error creating book: ${error.message}`);
    }
}

async function getAllBookService() {
    try {
        const books = await bookRepository.getAllBooksRepository();
        return books;
    } catch (error) {
        throw new Error(`Error getting books: ${error.message}`);
    }
}

async function getBookByIdService(bookId) {
    try {
        const book = await bookRepository.getBookByIdRepository(bookId);
        return book;
    } catch (error) {
        throw new Error(`Error getting book by ID: ${error.message}`);
    }
}

async function updateBookService(bookId, updatedBook) {
    try {
        const updated = await bookRepository.updateBookRepository(bookId, updatedBook);
        return updated;
    } catch (error) {
        throw new Error(`Error updating book: ${error.message}`);
    }
}

async function deleteBookService(bookId) {
    try {
        const deleted = await bookRepository.deleteBookRepository(bookId);
        return deleted;
    } catch (error) {
        throw new Error(`Error deleting book: ${error.message}`);
    }
}

export default { createBookService, getAllBookService, getBookByIdService, updateBookService, deleteBookService };