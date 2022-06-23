class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
 
    addCar(carModel, carNumber) {
        if (this.vehicles.length === this.capacity) {
            throw new Error('Not enough parking space.');
        }
 
        let car = {
            carModel: carModel,
            carNumber: carNumber,
            payed: false
        };
 
        this.vehicles.push(car);
 
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
 
    removeCar(carNumber) {
        let vehicle = this.vehicles.find(x => x.carNumber === carNumber);
        if (vehicle === undefined) {
            throw new Error(`The car, you're looking for, is not found.`);
        }
 
        if (vehicle.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
 
        this.vehicles = this.vehicles.filter(car => car.carNumber !== carNumber);
        return `${carNumber} left the parking lot.`;
    }
 
    pay(carNumber) {
        let vehicle = this.vehicles.find(x => x.carNumber === carNumber);
        if (vehicle === undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
 
        if (vehicle.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
 
        let objIndex = this.vehicles.findIndex((obj => obj.carNumber === carNumber));
        this.vehicles[objIndex].payed = true;
 
        return `${carNumber}'s driver successfully payed for his stay.`;
    }
 
    getStatistics(carNumber) {
        let result = [];
        if (carNumber === undefined) {
            result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);
 
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
 
            for (let car of this.vehicles) {
                let payed = car.payed === true ? 'Has payed' : 'Not payed';
                let currentCar = `${car.carModel} == ${car.carNumber} - ${payed}`;
                result.push(currentCar);
            }
 
        } else {
            let objIndex = this.vehicles.findIndex((obj => obj.carNumber == carNumber));
            let carModel = this.vehicles[objIndex].carModel;
            let payed = this.vehicles[objIndex].payed === true ? 'Has payed' : 'Not payed';
 
            let carInfo = `${carModel} == ${carNumber} - ${payed}`;
            result.push(carInfo);
        }
 
        return result.join('\n');
    }
}