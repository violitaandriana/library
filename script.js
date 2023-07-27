let myLibrary = [];

const booksContainer = document.getElementById("books-container");
const addButton = document.getElementById("add-btn");
const addBookModal = document.getElementById("add-book-modal");

// Constructor -> membuat sebuah object dengan properties"
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

addButton.addEventListener("click", showAddBookModal);
// 
function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("abc", "A", 200);
const book2 = new Book("def", "A", 200);
addBookToLibrary(book1);
addBookToLibrary(book2);

function displayBooks(library) {
    library.forEach(book => {
        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookBody = document.createElement('div');
        const bookButton = document.createElement('div');
        const readButton = document.createElement('button');
        const removeButton = document.createElement('button');
        const hr = document.createElement('hr');

        bookBody.setAttribute('style', 'white-space: pre;');

        bookCard.classList.add("book-card");
        bookTitle.classList.add("book-title");
        bookBody.classList.add("book-body");
        bookButton.classList.add("book-btn");
        readButton.classList.add("read-btn");
        removeButton.classList.add("remove-btn");

        bookTitle.textContent = `📖${book.title}`; 
        bookBody.textContent = "by " + book.author + "\r\n";
        bookBody.textContent += "- " + book.pages + " pages - ";
        readButton.textContent = `Read`; 
        removeButton.textContent = `Remove`; 

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookBody);
        bookCard.appendChild(hr);
        bookCard.appendChild(bookButton);
        bookButton.appendChild(readButton);
        bookButton.appendChild(removeButton);
        booksContainer.appendChild(bookCard);
        
    //    booksContainer.innerHTML += 
    //    `<div class="book-card" id="book-card">
    //    <h4 class="book-title" id="book-title">📖${book.title}
    //    <div class="book-body" id="book-body">
    //         by ${book.author} <br> - ${book.pages} pages -
    //     </div><hr>
    //     <div class="book-btn">
    //         <button class="read-btn">Read</button>
    //         <button class="remove-btn">Remove</button>
    //     </div>
    //     `;
    });
}

function showAddBookModal() {
    addBookModal.style.display = "block";

}


displayBooks(myLibrary);