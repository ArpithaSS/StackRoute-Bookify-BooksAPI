const repo = require("../repository/BookRepository");

const GetBooks = async () => {
  return await repo.GetBooks();
};

const GetBook = async (isbn) => {
  let book = await repo.GetBook(isbn);
  console.log(isbn);
  if (book == null) {
    throw Error(`Book with ISBN: ${isbn} does not exists`);
  } else {
    return book;
  }
};

const AddBook = async (book) => {
  let result = await repo.GetBook(book.isbn);
  if (result == null) {
    await repo.AddBook(book);
  } else {
    throw Error(
      `Book with ISBN: ${book.isbn} already exists`
    );
  }
};

const UpdateBook = async (isbn, book) => {
  let result = await repo.GetBook(isbn);
  console.log(isbn);
  if (result == null) {
    throw Error(`Book with ISBN: ${isbn} does not exists`);
  } else {
    await repo.UpdateBook(isbn, book);
  }
};

const DeleteBook = async (isbn) => {
  let result = await repo.GetBook(isbn);
  console.log(isbn, typeof(isbn),result);
  if (result == null) {
    throw Error(`Book with ISBN: ${isbn} does not exists`);
  } else {
    await repo.DeleteBook(isbn);
  }
};

module.exports = {
  GetBooks,
  GetBook,
  AddBook,
  UpdateBook,
  DeleteBook,
};
