async function request(url, options) {
    const response = await fetch(url, options);

    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json();

    return data;
}

async function getAllBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');

    const rows = Object.entries(books).map(visualizeBook).join('');

    document.querySelector('tbody').innerHTML = rows;
}

function visualizeBook([id, book]) {
    const result = `
        <tr data-id="${id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>`;

    return result;
}

async function createBook(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    })

    ev.target.reset();
    getAllBooks();
}

async function updateBook(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const id = formData.get('id');

    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    })

    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';

    ev.target.reset();
    getAllBooks();
}

async function deleteBook(id) {
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete'
    })

    getAllBooks();
}

function start() {
    document.getElementById('loadBooks').addEventListener('click', getAllBooks);
    document.querySelector('table').addEventListener('click', handleTableClick);
    document.getElementById('createForm').addEventListener('submit', createBook);
    document.getElementById('editForm').addEventListener('submit', updateBook);

    document.querySelector('#editForm [type="button"]').addEventListener('click', (ev) => {
        document.getElementById('createForm').style.display = 'block';
        document.getElementById('editForm').style.display = 'none';
        ev.target.reset();
    });
}

start();

function handleTableClick(ev) {
    if (ev.target.className == 'editBtn') {
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';

        const bookID = ev.target.parentNode.parentNode.dataset.id;

        loadBookForEditing(bookID);
    } else if (ev.target.className == 'deleteBtn') {
        const confirmed = confirm('Are you sure you want to delete this book?');

        if (confirmed) {
            const bookID = ev.target.parentNode.parentNode.dataset.id;
            deleteBook(bookID);
        }
    }
}

async function loadBookForEditing(id) {
    const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);

    document.querySelector('#editForm [name="id"]').value = id;
    document.querySelector('#editForm [name="title"]').value = book.title;
    document.querySelector('#editForm [name="author"]').value = book.author;
}