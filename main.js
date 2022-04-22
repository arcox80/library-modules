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
  const addBook = function (book) {};

  return {
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
