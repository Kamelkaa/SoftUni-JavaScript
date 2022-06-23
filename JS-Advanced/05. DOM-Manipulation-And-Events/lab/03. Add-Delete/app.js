function addItem() {
    let input = document.getElementById('newItemText');

    let li = document.createElement('li');
    li.textContent = input.value;

    let button = document.createElement('a');
    button.textContent = '[Delete]';
    button.href = '#';
    button.addEventListener('click', removeElement);
    li.appendChild(button);

    document.getElementById('items').appendChild(li);

    input.value = '';

    function removeElement(e) {
        let parent = e.target.parentNode;
        parent.remove();
    }
}