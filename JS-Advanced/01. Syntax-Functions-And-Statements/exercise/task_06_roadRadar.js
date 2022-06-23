function roadRadar(speed, area) {
    let speedZone = 0;

    switch (area) {
        case "motorway":
            speedZone = 130;
            break;
        case "interstate":
            speedZone = 90;
            break;
        case "city":
            speedZone = 50;
            break;
        case "residential":
            speedZone = 20;
            break;
    }

    let difference = 0;
    if (speed > speedZone) {
        difference = speed - speedZone;
    }

    let status = "";
    if (difference > 0) {
        if (difference <= 20) {
            status = "speeding";
        } else if (difference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedZone} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');