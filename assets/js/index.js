const bookGrid = document.querySelector(".bookGrid");
const dialog = document.querySelector("#dialog");
const bookForm = document.querySelector("#bookForm");
const newBookBtn = document.querySelector("#newBookBtn");
const closeDialogBtn = document.querySelector("#closeDialog");
const cancelBtn = document.querySelector("#cancelBtn");

newBookBtn.addEventListener("click", () => {
  bookForm.reset();
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => dialog.close());
cancelBtn.addEventListener("click", () => dialog.close());

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  addBookToLibrary(title, author, pages, read);
  displayLibrary();
  dialog.close();
});

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function createCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("div");
  title.classList.add("card-title");
  title.textContent = book.title;

  const author = document.createElement("div");
  author.classList.add("card-author");
  author.textContent = book.author;

  const divider = document.createElement("div");
  divider.classList.add("card-divider");

  const meta = document.createElement("div");
  meta.classList.add("card-meta");

  const pages = document.createElement("span");
  pages.classList.add("card-pages");
  pages.textContent = `${book.pages} pages`;

  const statusBadge = document.createElement("span");
  statusBadge.classList.add("status-badge", book.read ? "status-badge--read" : "status-badge--unread");
  statusBadge.textContent = book.read ? "Read" : "Unread";
  statusBadge.title = "Click to toggle read status";
  statusBadge.addEventListener("click", () => {
    book.read = !book.read;
    displayLibrary();
  });

  meta.appendChild(pages);
  meta.appendChild(statusBadge);

  const actions = document.createElement("div");
  actions.classList.add("card-actions");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.classList.add("btn-delete");
  deleteBtn.addEventListener("click", () => {
    const index = myLibrary.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      myLibrary.splice(index, 1);
      displayLibrary();
    }
  });

  actions.appendChild(deleteBtn);

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(divider);
  card.appendChild(meta);
  card.appendChild(actions);

  return card;
}

function displayLibrary() {
  bookGrid.innerHTML = "";
  myLibrary.forEach((book) => bookGrid.appendChild(createCard(book)));
}

addBookToLibrary("Book1", "Jane Doe", 300, true);
addBookToLibrary("Book2", "John Doe", 2200, true);
addBookToLibrary("Book3", "Alan Doe", 600, false);
addBookToLibrary("Book4", "Alice Doe", 350, true);

displayLibrary();
