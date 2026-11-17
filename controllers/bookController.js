
import * as bookServices from '../services/bookService.js';

export const fetchAllBooks = async(req, res) => {
    const books = await bookServices.fetchAllBooks();
    res.status(200).json(books);
}


// Insert
export const createBook = async (req, res) => {
    console.log(req);
    const {name, author} = req.body;
    const book = {name, author};

    try{
        const bookId = await bookServices.createBook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: `${e.message || "Internal Server Error"}`
        });
    }
}


// Update
export const editBook = async (req, res) =>{
    const {name, author} = req.body;
    const { id } = req.params;
    const book = {id: parseInt(id), name, author};

    try{
        const updatedBook = await bookServices.updateBook(book);
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: `${e.message || "Internal Server Error"}`
        });
    }
}


// Delete
export const deletedBook = async (req, res) =>{
    const { id } = req.params;

    try{
        const deletedBook = await bookServices.deleteBook(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedBook
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: `${e.message || "Internal Server Error"}`
        });
    }
}
