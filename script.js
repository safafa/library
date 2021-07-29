let myLibrary = [];

function Book(title,author,pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book)
}