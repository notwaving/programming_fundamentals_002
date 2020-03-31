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

// function countBooks() {
//   return catalogue.length;      
// }

countBooks = () => catalogue.length;


// Look at each book in the catalogue
// while checking each book I need to see if the book and author match the one that's passed into the function.

// function checkBook(book) {
//   for (let i = 0; i < catalogue.length; i++) {
//     if (book === catalogue[i]) {
//       // [i] is each indexed string in the catalogue array
//       return true;
//     }
//     } return false;
// }

// This function is going to be rewritten as an arrow function.
// It will also implement a find() method, as we only need to see if a book is in in the catalogue, not check all the books
checkBook = book => catalogue.find(catalogue => catalogue.includes(book)) ? true : false;

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

/* Repl.it returns 0. In fact it only ever returns whatever is originally assigned to count.
npm test returns "Comparing two different types of values. Expected number but received undefined."*/
// function countBooksByKeyword(keyword) {
//   // We'll be returning the total number of books containing the keyword and we'll count them here
//   let count = 0;
//   // Go through each item in the catalogue array
//   catalogue.forEach(function(item){
//     // If our keyword matches any word in that item...
//     if (keyword === item.search(keyword)){
//       //...increment count by 1.
//       count ++;
//     } // When we have iterated through the entire array return count
//   }); return count;
// };


// There was an attempt at something here, but I clearly don't understantd the syntax...
// function countBooksByKeyword(keyword) {
//   let count = 0;
//   catalogue.foreach(myFunction)
//   function myFunction(){
//     if catalogue.includes(keyword) {
//       count ++;
//     }
//   } return count;

 // Use includes() which returns a boolean
  // Includes() is case-sensitive so you need to .toLowercase()
// function countBooksByKeyword(keyword) {
//   // Set a counter
//   let count = 0;
//   // Convert keyword to lowercase
//   let keywordLowercase = keyword.toLowerCase();
//   // Map through the catalogue, creating a new array that is in lowercase
//   const catLowercase = catalogue.map(x => x.toLowerCase());
//   // Loop through this new array, and...
//   catLowercase.forEach(function(item){
//     //... if the keyword is included in each... includes() is truthy, so it suggests...
//     let match = catLowercase.includes(keywordLowercase);
//     // ... that if it's true, increment the count by 1;
//       count += 1 ;
//     // once the array has been looped through, return the total count
//   }); return count;
// }
// "SyntaxError: Unexpected token return."

// The solution:
function countBooksByKeyword(keyword) {
  // We'll be returning the total number of books containing the keyword and we'll count them here
  let count = 0;
  // Go through each item in the catalogue array
  catalogue.forEach(function(item) {
    // If our keyword matches any word in that item...
    if (item.toLowerCase().includes(keyword.toLowerCase())) {
      // console.log('MATCH');
      //...increment count by 1.
      count++;
    } // When we have iterated through the entire array return count
  });
  return count;
}

function getBooksByAuthor(author) {
  let booksByAuthor = []
  catalogue.forEach(function(item) {
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