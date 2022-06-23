async function getInfo() {
    const stopNameElement = document.getElementById('stopName');
    const timeElement = document.getElementById('buses');

    const stopId = document.getElementById('stopId').value;
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + stopId;

    try {
        timeElement.replaceChildren();

        const reponse = await fetch(url);
        const data = await reponse.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

            timeElement.appendChild(liElement);
        });
    } catch (error) {
        stopNameElement.textContent = 'Error';
    }
}