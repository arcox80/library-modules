// write your code here to make the tests pass
const Library = function () {
  const addBook = function (book) {};
  
  return {
    addBook: addBook
  };
};
const Book = function(title, author) {
  const bookObj = {
    title: title,
    author: author,
    checkedOut: false
  };
};