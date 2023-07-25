const addBookModal = document.getElementById("add-book-modal");

const openAddBookModal = () => {
    addBookModal.classList.add('active')
    overlay.classList.add('active')
  }
  
  const closeAddBookModal = () => {
    addBookModal.classList.remove('active')
    overlay.classList.remove('active')
    errorMsg.classList.remove('active')
    errorMsg.textContent = ''
  }
  