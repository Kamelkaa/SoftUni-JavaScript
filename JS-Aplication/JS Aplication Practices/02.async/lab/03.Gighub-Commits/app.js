function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const ulElement = document.getElementById('commits');

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    ulElement.replaceChildren();

    fetch(url)
        .then(response => {
            if (response.status == 404) {
                throw new Error(`<li>${response.status} (${response.statusText})</li>`);
            }
            return response.json();
        })
        .then(getCommits)
        .catch(error => {
            ulElement.innerHTML = error.message;
        });

    function getCommits(data) {
        for (let entry of data) {
            const liElement = document.createElement('li');
            liElement.textContent = `${entry.commit.author.name}: ${entry.commit.message}`;
            ulElement.appendChild(liElement);
        }
    }
}