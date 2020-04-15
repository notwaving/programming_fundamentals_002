// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

countBooks = () => catalogue.length;

// This function will implement a find() method, as we only need to see if a book is in in the catalogue, not check all the books
checkBook = book => catalogue.find(catalogue => catalogue.includes(book)) ? true : false;

countBooksByFirstLetter = letter => {
  const firstLetters = catalogue.map(x => x[0]);
  let count = 0
  for (let i = 0; i < firstLetters.length; i++) {
    if (letter === firstLetters[i]) {
      count += 1;
    }
  } return count;
}

function countBooksByKeyword(keyword) {
  // We'll be returning the total number of books containing the keyword and we'll count them here
  let count = 0;
  // Go through each item in the catalogue array
  catalogue.forEach(function (item) {
    // If our keyword matches any word in that item...
    if (item.toLowerCase().includes(keyword.toLowerCase())) {
      count++;
    }
  });
  return count;
}

function getBooksByAuthor(author) {
  let booksByAuthor = []
  catalogue.forEach(function (item) {
    if (item.toLowerCase().includes(author.toLowerCase())) {
      booksByAuthor.push(item);
    }
  }); return booksByAuthor;
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};