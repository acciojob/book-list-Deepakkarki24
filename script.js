let form = document.querySelector("form");
let BookTitle = document.getElementById("title");
let BookAuthor = document.getElementById("author");
let BookIsbn = document.getElementById("isbn");
let submitBtn = document.getElementById("submit");

let tableBody = document.getElementById("book-list");

function AddBookRow(e) {
  e.preventDefault();
  if (BookTitle.value && BookAuthor.value && BookIsbn.value) {
    let row = document.createElement("tr");

    let colTitle = document.createElement("td");
    let colAuthor = document.createElement("td");
    let colIsbn = document.createElement("td");
    let colDelete = document.createElement("td");
    let cancelIcon = document.createElement("i");

    colTitle.innerHTML = BookTitle.value;
    colAuthor.innerHTML = BookAuthor.value;
    colIsbn.innerHTML = BookIsbn.value;
    cancelIcon.classList = "ri-close-circle-fill delete";
    colDelete.append(cancelIcon);

    row.append(colTitle, colAuthor, colIsbn, colDelete);
    tableBody.append(row);
    BookTitle.value = "";
    BookAuthor.value = "";
    BookIsbn.value = "";

    cancelIcon.addEventListener("click", () => {
      tableBody.removeChild(row);
    });
  }
}

form.addEventListener("submit", AddBookRow);
