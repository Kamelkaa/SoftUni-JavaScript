function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);
    gradient.addEventListener('mouseout', mouseOut);
    let result = document.getElementById('result');

    function onMove(e) {
        let box = e.target;
        let offset = Math.floor(e.offsetX / box.clientWidth * 100);

        result.textContent = `${offset}%`;
    }

    function mouseOut(e) {
        result.textContent = '';
    }
}