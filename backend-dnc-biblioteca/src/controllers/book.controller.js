import bookService from "../services/book.service.js";

async function createBookController(req, res) {
    try {
        const newBook = req.body;
        
        const createdBook = await bookService.createBookService(newBook);
        res.status(201).json(createdBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAllBooksController(req, res) {
    try {
        const books = await bookService.getAllBookService();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getBookByIdController(req, res) {
    try {
        const bookId = req.params.id;
        const book = await bookService.getBookByIdService(bookId);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }        
}

async function updateBookController(req, res) {
    try {
        const bookId = req.params.id;
        const updatedBook = req.body;
        await bookService.updateBookService(bookId, updatedBook);
        res.status(200).json({ message: 'Book updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteBookController(req, res) {
    try {
        const bookId = req.params.id;
        await bookService.deleteBookService(bookId);
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default { createBookController, getAllBooksController, getBookByIdController, updateBookController, deleteBookController };