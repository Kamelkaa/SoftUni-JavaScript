class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        }
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.some(p => p.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if (Number(this.priceForTheCamp[condition]) > Number(money)) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        const participant = {
            name,
            condition,
            "power": 100,
            "wins": Number(0)
        }

        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;

    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(p => p.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            const participantForRemove = this.listOfParticipants.find(p => p.name == name);
            this.listOfParticipants = this.listOfParticipants.filter(p => p.name != name);
            return `The ${name} removed successfully.`;
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (!this.listOfParticipants.some(p => p.name == participant1) ||
            (participant2 != undefined && !this.listOfParticipants.some(p => p.name == participant2))) {
            throw new Error('Invalid entered name/s.');
        }
        if (participant1 != undefined && participant2 != undefined) {
            const fisrtP = this.listOfParticipants.find(p => p.name == participant1);
            const secondP = this.listOfParticipants.find(p => p.name == participant2);
            if (fisrtP.condition != secondP.condition) {
                throw new Error('Choose players with equal condition.');
            }
        }

        if (typeOfGame == 'Battleship') {
            const currnetP = this.listOfParticipants.find(p => p.name == participant1);
            currnetP.power += 20;

            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        } else if (typeOfGame == 'WaterBalloonFights') {
            const fisrtP = this.listOfParticipants.find(p => p.name == participant1);
            const secondP = this.listOfParticipants.find(p => p.name == participant2);
            if (fisrtP.power > secondP.power) {
                fisrtP.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (fisrtP.power < secondP.power) {
                secondP.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            } else {
                return 'There is no winner.';

            }
        }

    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        let sortedParticipants = this.listOfParticipants
            .slice()
            .sort((a, b) => b.wins - a.wins)
            .forEach(p => {
                result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
            });

        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

