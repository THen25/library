const bookGrid = document.querySelector(".bookGrid");

const bookForm = document.querySelector("#bookForm");
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

const dialog = document.querySelector("#dialog");

const newBookBtn = document.querySelector("#newBookBtn");
newBookBtn.addEventListener("click", () => {
  dialog.showModal();
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
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayLibrary() {
  bookGrid.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList = "card";

    const list = document.createElement("ul");
    [
      ["Title", book.title],
      ["Author", book.author],
      ["Pages", book.pages],
      ["Status", book.read ? "Read" : "Not Read"],
    ].forEach(([label, value]) => {
      const item = document.createElement("li");
      item.style.marginBottom = "1rem";
      const bold = document.createElement("strong");
      bold.textContent = `${label}: `;
      item.appendChild(bold);
      item.appendChild(document.createTextNode(value));
      list.appendChild(item);
    });

    card.appendChild(list);
    bookGrid.appendChild(card);
  });
}

addBookToLibrary("Book1", "Jane Doe", 300, true);
addBookToLibrary("Book2", "John Doe", 2200, true);
addBookToLibrary("Book3", "Alan Doe", 600, false);
addBookToLibrary("Book4", "Alice Doe", 350, true);

displayLibrary();
