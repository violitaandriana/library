let myLibrary = [];

const booksContainer = document.getElementById('books-container');
const addBookModal = document.getElementById('add-book-modal');
const addButton = document.getElementById('add-btn');
const closeButton = document.getElementById('close-btn');
const overlay = document.getElementById('overlay-modal');
const submitButton = document.getElementById('submit-btn');
const removeButton = document.getElementById('remove-btn');
const readButton = document.getElementById('read-btn');

addButton.addEventListener('click', showAddBookModal);
closeButton.addEventListener('click', closeModal);
submitButton.addEventListener('click', addBook);
removeButton.addEventListener('click', removeBook);
readButton.addEventListener('click', changeToRead);


// Constructor -> membuat sebuah object dengan properties'
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
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
    library.forEach(book => {
        // HTML element
        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookBody = document.createElement('div');
        const bookButton = document.createElement('div');
        const readButton = document.createElement('button');
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
        removeButton.classList.add('remove-btn');
        // textContent in HTML
        bookTitle.textContent = `📖${book.title}`;
        bookBody.textContent = 'by ' + book.author + '\r\n';
        bookBody.textContent += '- ' + book.pages + ' pages - ';
        readButton.textContent = `Read`;
        removeButton.textContent = `Remove`;
        // appendChild
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookBody);
        bookCard.appendChild(hr);
        bookCard.appendChild(bookButton);
        bookButton.appendChild(readButton);
        bookButton.appendChild(removeButton);
        booksContainer.appendChild(bookCard);

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
    });
}

// Agar card-nya dirender ulang dari awal, bukan udah ada trs dirender lagi (ngulang terus)
function resetBookCards() {
    booksContainer.textContent = '';
}

function showAddBookModal() {
    addBookModal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    clearModal();
    addBookModal.style.display = 'none';
    overlay.style.display = 'none';
}

function clearModal() {
    title.value = '';
    author.value = '';
    pages.value = '';
    isRead.checked = false;
}

function getBookFromUser() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').value;
    const book = new Book(title, author, pages);
    return book;
}

function addBook() {
    const newBook = getBookFromUser();
    addBookToLibrary(newBook);
    closeModal();
}

// user tekan button remove
// dapat id book nya ??
// dari id, dicari di library, trs dihapus
// render ulang buku setelah dihapus
function removeBook() {

}

// user tekan button read
// button read nya ganti warna + valuenya jadi true
function changeToRead() {

}


// function checkbox() {
//     let checked = false;
//     if (read)
// }

