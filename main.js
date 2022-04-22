// write your code here to make the tests pass
const Library = function () {
  const books = [
    { title: 'The Tipping Point',
      author: 'Malcolm Gladwell',
      checkedOut: true
    },
    {
      title: 'Generation Kill',
      author: 'Evan Wright',
      checkedOut: false
    }
  ];
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