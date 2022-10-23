const books = require("./../models/books");
const bookModel = require("./../models/books");

const getBookList = async (req, res) => {
  let data = [];
  let books = [];
  try {
    data = await bookModel.find();
    console.log(data);
    data.forEach((book) => {
      books.push({ name: book.name, author: book.author, genre: book.genre });
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("bookList", { books: books });
  }
};

const getBook = (req, res) => {
  res.render("addBooks");
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    await bookModel.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  } finally {
    res.redirect("/books");
  }
  
deleteBook.get("/:id/deleteTask", async (req, res) => {
  const todos = await Todo.findByIdAndDelete(req.params.id);
  res.redirect("/");
});


// const editBook = async (req, res) => {
//     const { id } = req.body;
//     let books = [];
//     try {
//         await editBodyById(id);
//         books = await getBookList();


const postBook = (req, res) => {
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/books");
    });
};

module.exports = { getBookList, getBook, postBook, deleteBook };