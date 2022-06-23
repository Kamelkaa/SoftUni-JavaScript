async function getInfo() {

    let busId = document.getElementById('stopId');
    const stopNameDiv = document.getElementById('stopName');
    const busesList = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId.value}`
    try {
        stopNameDiv.textContent = 'Loading...'
        busesList.innerHTML = '';
        
        const res = await fetch(url);
        if (res.status != '200') {
            throw new Error(res.statusText);
        }

        busId.value = '';
        
        const data = await res.json();
        stopNameDiv.textContent = data.name;
       
        for (const bus in data.buses) {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`
            busesList.appendChild(liElement);
        }
        
    } catch {
        stopNameDiv.textContent = 'Error'
    }
}