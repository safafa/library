let myLibrary = [];
const table = document.getElementById('books');

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

book1 = new Book("test", "tester", 10);
book2 = new Book("test", "tester", 10);
book3 = new Book("test", "tester", 10);
book4 = new Book("test", "tester", 10);

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)

function displayBooks() {
    myLibrary.map((book)=> {
        row = table.insertRow();
        title = row.insertCell();
        author = row.insertCell();
        pages = row.insertCell();
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = book.pages;
    })
}