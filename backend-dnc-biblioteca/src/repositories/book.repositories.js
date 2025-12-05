import db from "../config/database.js";

db.run(`CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    pages INTEGER,
    ISBN TEXT UNIQUE,
    editorial TEXT
)`);

function createBookRepository(newBook) {
    return new Promise((resolve, reject) => {
        const { title, pages, ISBN, editorial } = newBook;
        const query = `INSERT INTO books (title, pages, ISBN, editorial) VALUES (?, ?, ?, ?)`;
        db.run(query, [title, pages, ISBN, editorial], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve({ id: this.lastID, ...newBook });
            }
        });
    });
}

function getAllBooksRepository() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM books`;
        db.all(query, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    })
}

function getBookByIdRepository(bookId) {
    return new Promise ((resolve, reject) => {
        const query = `SELECT * FROM books WHERE id = ?`;
        db.get (query, [bookId], (err, row) => {
            if (err) {
                reject (err);
            } else {
                resolve (row);
            }
        });
    })
}

function updateBookRepository(bookId, updatedBook) {
    return new Promise((resolve, reject) => {
        const { title, pages, ISBN, editorial } = updatedBook;
        const query = `UPDATE books SET title = ?, pages = ?, ISBN = ?, editorial = ? WHERE id = ?`;
        db.run(query, [title, pages, ISBN, editorial, bookId], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve({ id: bookId, ...updatedBook });
            }
        });
    })
}

function deleteBookRepository(bookId) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM books WHERE id = ?`;
        db.run(query, [bookId], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve({ message: 'Book deleted successfully' });
            }
        });
    })
}

export default { createBookRepository, getAllBooksRepository, getBookByIdRepository, updateBookRepository, deleteBookRepository };