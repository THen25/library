const bookGrid = document.querySelector(".bookGrid");

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
      ["Status", book.read],
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

addBookToLibrary("Book1", "Jane Doe", 300, "Has read");
addBookToLibrary("Book2", "John Doe", 2200, "Has read");
addBookToLibrary("Book3", "Alan Doe", 600, "Has not read");
addBookToLibrary("Book4", "Alice Doe", 350, "Has read");

displayLibrary();
