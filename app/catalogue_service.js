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

function countBooks() {
  return catalogue.length;      
}

// Look at each book in the catalogue
// while checking each book I need to see if the book and author match the one that's passed into the function.
function checkBook(book) {
  for (let i = 0; i < catalogue.length; i++) {
    if (book === catalogue[i]) {
      // [i] is each indexed string in the catalogue array
      return true;
    }
    } return false;
}

function countBooksByFirstLetter(letter) {
// Creates a new array with the first letter of each book
  const firstLetters = catalogue.map(x => x[0]);
  let count = 0
  for (let i = 0; i < firstLetters.length; i++) {
      if (letter === firstLetters[i]) {
        count += 1;
// [i] is each indexed string in the firstLetters array       
    } 
  } return count;
}

/* This function always returns 20, no matter the input 
I assume it's returning the number of items in the array, as there are 20 books in total*/
// function countBooksByKeyword(keyword) {
//   let count = 0;
//   for (let i = 0; i < catalogue.length; i++) {
//     if (keyword === catalogue[i].search(keyword));
//     count ++;
//   } return count;
// }

/* Repl.it doesn't even print anything out for this one...  
npm test returns "Comparing two different types of values. Expected number but received undefined."*/
function countBooksByKeyword(keyword) {
  // We'll be returning the total number of books containing the keyword and we'll count them here
  let count = 0;
  // Go through each item in the catalogue array
  catalogue.forEach(function(item){
    // If our keyword matches any word in that item...
    if (keyword === item.search(keyword)){
      //...increment count by 1.
      count ++;
    } // When we have iterated through the entire array return count
    
  }); return count;
};

function getBooksByAuthor(author) {
  // Your code here
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};