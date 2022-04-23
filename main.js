const Library = function () {
  const books = [];

  const addBook = function (book) {
    books.push(book);
  };

  const checkOutBook = function (book) {
    for (let i = 0; i < books.length; i += 1) {
      if (books[i].title === book.title && books[i].checkedOut === false) {
        book.setAttribute('checkedOut', true);
      }
    }
  };

  const returnBook = function (book) {
    for (let i = 0; i < books.length; i += 1) {
      if (books[i].title === book.title && books[i].checkedOut === true) {
        book.setAttribute('checkedOut', false);
      }
    }
  };

  return {
    addBook,
    checkOutBook,
    returnBook,
  };
};

const Book = function (title, author) {
  const getAttribute = function (attribute) {
    if (Object.prototype.hasOwnProperty.call(this, attribute)) {
      return this[attribute];
    }
  };

  const setAttribute = function (attribute, value) {
    if (Object.prototype.hasOwnProperty.call(this, attribute)) {
      this[attribute] = value;
    }
  };

  return {
    title,
    author,
    checkedOut: false,
    getAttribute,
    setAttribute,
  };
};
