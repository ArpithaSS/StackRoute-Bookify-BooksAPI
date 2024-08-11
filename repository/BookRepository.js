const Book = require("../models/Book");

const GetBooks = async () => {
  return await Book.find({});
};

const GetBook = async (isbn) => {
  return await Book.findOne({ isbn: isbn });
};

const AddBook = async (bookObj) => {
  let book = new Book({
    isbn: bookObj.isbn,
    title: bookObj.title,
    author: bookObj.author,
    description: bookObj.description,
    price: bookObj.price,
    publisher: bookObj.publisher,
    publicationDate: bookObj.publicationDate,
    genre: bookObj.genre,
    language: bookObj.language
  });
  return await book.save();
};

const UpdateBook = async (isbn,book) => {
  await Book.updateOne(
    { isbn: isbn },
    {
        title: book.title,
        author: book.author,
        description: book.description,
        price: book.price,
        publisher: book.publisher,
        publicationDate: book.publicationDate,
        genre: book.genre,
        language: book.language
    }
  );

  console.log(isbn, isbn);
};

const DeleteBook = async (isbn) => {
  await Book.deleteOne({ isbn: isbn });
  console.log(isbn);
};

module.exports = {
  GetBooks,
  GetBook,
  AddBook,
  UpdateBook,
  DeleteBook,
};
