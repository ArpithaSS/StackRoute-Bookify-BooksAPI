const service = require("../services/BookService");

const GetBooks = async (req, res) => {
  res.status(200).send(await service.GetBooks());
};

const GetBook = async (req, res) => {
  try {
    let result = await service.GetBook(req.params.isbn);
    res.status(200).send({ status: 200, data: result });
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
};

const AddBook = async (req, res) => {
  try {
    await service.AddBook(req.body);
    res
      .status(201)
      .send({ status: 201, message: "Book data saved successfully" });
  } catch (err) {
    res.status(209).send({ status: 209, message: err.message });
  }
};

const UpdateBook = async (req, res) => {
  try {
    await service.UpdateBook(req.params.isbn, req.body);
    res
      .status(200)
      .send({ status: 200, message: "Book data updated successfully" });
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
};

const DeleteBook = async (req, res) => {
  try {
    await service.DeleteBook(req.params.isbn);
    res
      .status(200)
      .send({ status: 200, message: "Book data deleted successfully" });
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
};

module.exports = {
  GetBooks,
  GetBook,
  AddBook,
  UpdateBook,
  DeleteBook,
};
