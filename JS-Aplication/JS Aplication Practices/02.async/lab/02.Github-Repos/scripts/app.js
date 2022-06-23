function loadRepos() {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then(response => {
			if (response.ok == false) {
				throw new Error(`${response.status} ${response.statusText}`);
			}
			return response.json()
		})
		.then(handleResponse)
		.catch(error => console.log(error));

	function handleResponse(data) {
		const ulElement = document.getElementById('repos');
		ulElement.replaceChildren();

		for (let repo of data) {
			const liElement = document.createElement('li');
			const aElement = document.createElement('a');

			aElement.href = `${repo.html_url}`;
			aElement.textContent = repo.full_name;

			liElement.appendChild(aElement);
			ulElement.appendChild(liElement);
		}
	}
}