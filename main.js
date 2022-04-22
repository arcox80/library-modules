// write your code here to make the tests pass
const Library = function () {
  // eslint-disable-next-line no-var
  var books = [
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
    books.push(book);
  };

  return {
    viewBooks,
    addBook,
  };
};
const Book = function (title, author) {
  return {
    title,
    author,
    checkedOut: false,
  };
};

const myLibrary = Library();
const myBook = Book('Catcher in the Rye', 'J.D. Salinger');
myLibrary.addBook(myBook);
myLibrary.viewBooks();
