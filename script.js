let myLibrary = [];

const booksContainer = document.getElementById('books-container');
const addBookModal = document.getElementById('add-book-modal');
const addButton = document.getElementById('add-btn');
const closeButton = document.getElementById('close-btn');
const overlay = document.getElementById('overlay-modal');
const submitButton = document.getElementById('submit-btn');
const removeButton = document.querySelector('.remove-btn');
const readButton = document.querySelector('.read-btn');
const notReadButton = document.querySelector('.not-read-btn');
const radioButtons = document.querySelectorAll('input[name="read"]');

addButton.addEventListener('click', showAddBookModal);
closeButton.addEventListener('click', closeModal);
submitButton.addEventListener('click', (event) => {
    addBook(event);
});


let isRead;
function getCheckedButton() {
    radioButtons.forEach(button => {
        if (button.checked) {
            isRead = button.value;
            button.checked = false;
        }
    });
    return isRead;
}

// Constructor -> membuat sebuah object dengan properties'
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// 
function addBookToLibrary(book) {
    console.log(book);
    console.log(myLibrary);
    myLibrary.push(book);
    displayBooks(myLibrary);
}

function displayBooks(library) {
    resetBookCards();
    library.forEach((book, index) => {
        // HTML element
        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookBody = document.createElement('div');
        const bookButton = document.createElement('div');
        const readButton = document.createElement('button');
        const notReadButton = document.createElement('button');
        const removeButton = document.createElement('button');
        const hr = document.createElement('hr');
        // for \r\n or enter
        bookBody.setAttribute('style', 'white-space: pre;');
        // add class from HTML
        bookCard.classList.add('book-card');
        bookTitle.classList.add('book-title');
        bookBody.classList.add('book-body');
        bookButton.classList.add('book-btn');
        readButton.classList.add('read-btn');
        notReadButton.classList.add('not-read-btn');
        removeButton.classList.add('remove-btn');
        // textContent in HTML
        bookTitle.textContent = `📖${book.title}`;
        bookBody.textContent = 'by ' + book.author + '\r\n';
        bookBody.textContent += '- ' + book.pages + ' pages - ';
        readButton.textContent = `Read`;
        notReadButton.textContent = `Not read`;
        removeButton.textContent = `Remove`;
        // appendChild
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookBody);
        bookCard.appendChild(hr);

        readButton.addEventListener('click', () => {
            changeToNotRead(index);
        });
        notReadButton.addEventListener('click', () => {
            changeToRead(index);
        });
        removeButton.addEventListener('click', () => {
            removeBook(index);
        });

        bookCard.appendChild(bookButton);
        if (book.read === "yes") {
            bookButton.appendChild(readButton);
        }
        else {
            bookButton.appendChild(notReadButton);
        }
        bookButton.appendChild(removeButton);
        booksContainer.appendChild(bookCard);
    });
}

// Agar card-nya dirender ulang dari awal, bukan udah ada trs dirender lagi (ngulang terus)
function resetBookCards() {
    booksContainer.textContent = '';
}

function showAddBookModal() {
    // addBookModal.style.opacity = 1;
    addBookModal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    addBookModal.style.display = 'none';
    overlay.style.display = 'none';
    clearModal();
}

function clearModal() {
    title.value = '';
    author.value = '';
    pages.value = '';
}

function getBookFromUser() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    read = getCheckedButton();
    console.log(title, author, pages, read);
    const book = new Book(title, author, pages, read);
    return book;
}

// Validasi antar buku hrs beda 
// Cek newBook bandingin ke array myLibrary
function addBook(event) {
    event.preventDefault();
    const newBook = getBookFromUser();
    if (validateBook(newBook) === true) {
        clearModal();
        return;
    }
    addBookToLibrary(newBook);
    closeModal();
}

function validateBook(newBook) {
    for(let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === newBook.title && myLibrary[i].author === newBook.author) {
            alert("This book is already here!");
            return true;
        }
    }
    return false;
}

// user tekan button remove
// dapat id book nya ??
// dari id, dicari di library, trs dihapus
// render ulang buku setelah dihapus
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks(myLibrary);
}

// Kebalikan, kalau readButton diklik -> ganti notReadButton
function changeToNotRead(index) {
    myLibrary[index].read = 'no';
    displayBooks(myLibrary);
}

function changeToRead(index) {
    myLibrary[index].read = 'yes';
    displayBooks(myLibrary);
}

// Other way to displayBooks (not recommended)
//    booksContainer.innerHTML += 
//    `<div class='book-card' id='book-card'>
//    <h4 class='book-title' id='book-title'>📖${book.title}
//    <div class='book-body' id='book-body'>
//         by ${book.author} <br> - ${book.pages} pages -
//     </div><hr>
//     <div class='book-btn'>
//         <button class='read-btn'>Read</button>
//         <button class='remove-btn'>Remove</button>
//     </div>
//     `;