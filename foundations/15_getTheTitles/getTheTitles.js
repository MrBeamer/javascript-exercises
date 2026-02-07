const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function () {
  const bookTitles = books.map((book) => book.title);
  return bookTitles;
};

getTheTitles(books); // ['Book','Book2']
// Do not edit below this line
module.exports = getTheTitles;

/*
Your job is to write a function that takes the array and returns an array of titles:

getTheTitles(books) // ['Book','Book2']
Hints
You should use a built-in javascript method to do most of the work for you!*/
