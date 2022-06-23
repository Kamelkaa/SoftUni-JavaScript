window.addEventListener('load', solve);

function solve() {
    const gengreField = document.getElementById('genre');
    const nameField = document.getElementById('name');
    const authorField = document.getElementById('author');
    const dateField = document.getElementById('date');

    const allHitsContainer = document.querySelector('div.all-hits-container');
    const likes = document.querySelector('div.likes p');
    const saveContainer = document.querySelector('div.saved-container');

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addInfo);

    function addInfo(event) {
        event.preventDefault();

        
        if (gengreField.value == '' || nameField.value == '' || authorField.value == '' || dateField.value == '') {
            return;
        }
        let divElement = document.createElement('div');
        divElement.classList.add("hits-info");
        divElement.innerHTML = `<img src="./static/img/img.png">`;

        const firstH2 = document.createElement('h2');
        firstH2.textContent = `Genre: ${gengreField.value}`;

        const secondH2 = document.createElement('h2');
        secondH2.textContent = `Name: ${nameField.value}`;

        const thirdH2 = document.createElement('h2');
        thirdH2.textContent = `Author: ${authorField.value}`;

        const h3 = document.createElement('h3');
        h3.textContent = `Date: ${dateField.value}`;

        divElement.appendChild(firstH2);
        divElement.appendChild(secondH2);
        divElement.appendChild(thirdH2);
        divElement.appendChild(h3);

        const saveBtn = document.createElement('button');
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', saveSong);


        const likeBtn = document.createElement('button');
        likeBtn.classList.add("like-btn");
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', likeSong);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteSong);

        divElement.appendChild(saveBtn);
        divElement.appendChild(likeBtn);
        divElement.appendChild(deleteBtn);

        allHitsContainer.appendChild(divElement);

        gengreField.value = '';
        nameField.value = '';
        authorField.value = '';
        dateField.value = '';
    }

    function likeSong(event) {
        let numbersOfLikes = Number(likes.textContent.split(': ')[1]) + 1;
        likes.textContent = likes.textContent.split(': ')[0] + ': ' + numbersOfLikes;
        event.target.disabled = true;
    }

    function saveSong(event) {
        const lBtn = document.querySelector('.like-btn');
        const sBtn = event.target;
        divElementParent = event.target.parentElement;
        divElementParent.removeChild(lBtn);
        divElementParent.removeChild(sBtn);

        saveContainer.appendChild(divElementParent);
    }

    function deleteSong(event) {
        const divForRemove = event.target.parentElement;
        divForRemove.parentElement.removeChild(divForRemove);
    }
}