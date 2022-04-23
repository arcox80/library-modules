// write your code here to make the tests pass
const Library = function () {
  const books = [
    {
      title: 'The Tipping Point',
      author: 'Malcolm Gladwell',
      checkedOut: true,
    },
    {
      title: 'Generation Kill',
      author: 'Evan Wright',
      checkedOut: false,
    },
  ];

  const viewBooks = function () {
    return console.log(books);
  };

  const addBook = function (book) {
    return books.push(book);
  };

  const checkOutBook = function (book) {
    for (let i = 0; i < books.length; i += 1) {
      if (books[i].title === book.title && books[i].checkedOut === false) {
        books[i].checkedOut = true;
        return `You have checked out ${book.title}.`;
      }
    }
  };

  const returnBook = function (book) {
    for (let i = 0; i < books.length; i += 1) {
      if (books[i].title === book.title && books[i].checkedOut === true) {
        books[i].checkedOut = false;
        return `Thank you for returning ${book.title}.`;
      }
    }
  };

  return {
    viewBooks,
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
    if (this[attribute]) {
      this[attribute] = value;
      return this[attribute];
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

const myLibrary = Library();
const myBook = Book('Catcher in the Rye', 'J.D. Salinger');
const fakeBook = Book('Good Times', 'Eliza');
myLibrary.addBook(myBook);
console.log(myLibrary.checkOutBook(fakeBook));
console.log(fakeBook.getAttribute('checkedOut'));
