function task04(arr) {
    let result = [];

    for (let elemnt of arr) {
        let [name, level, items] = elemnt.split(' / ');

        result.push({
            name,
            level: Number(level),
            items: items ? items.split(', ') : []
        });
    }

    console.log(JSON.stringify(result));
}

task04(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

task04(['Jake / 1000 / Gauss, HolidayGrenade']);