function timeToWalk(allSteps, footprint, speed) {
    let steps = Number(allSteps);
    let footprintSize = Number(footprint);
    let studentSpeed = Number(speed);

    let distance = steps * footprintSize;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distance / speedMetersSec;
    let rest = Math.floor(distance / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" +
        (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" +
        (timeSec < 10 ? "0" : "") + timeSec);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
