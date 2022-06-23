function extractText() {
    let items = document.querySelectorAll('ul#items li');
    let textArea = document.querySelector('#result');

    for (let node of items) {
        textArea.value += node.textContent + '\n';
    }
}