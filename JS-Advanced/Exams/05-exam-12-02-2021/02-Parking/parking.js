class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error("Not enough parking space.");
        }

        let car = {
            carModel,
            carNumber,
            payed: false,
        };

        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let currentCar = this.vehicles.find(car => car.carNumber == carNumber);

        if (!currentCar) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (!currentCar.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles = this.vehicles.filter(car => car.carNumber != currentCar.carNumber);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let currentCar = this.vehicles.find(car => car.carNumber == carNumber);

        if (!currentCar) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (currentCar.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        currentCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        let result = [];

        if (!carNumber) {
            result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);

            let sortedVehicles = this.vehicles
                .slice()
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(car => {
                    result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`);
                });

            // this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));

            // for (let car of this.vehicles) {
            //     let payed = car.payed === true ? 'Has payed' : 'Not payed';
            //     let currentCar = `${car.carModel} == ${car.carNumber} - ${payed}`;
            //     result.push(currentCar);
        } else {
            let car = this.vehicles.find(car => car.carNumber == carNumber);
            result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`);
        }

        return result.join('\n');
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
