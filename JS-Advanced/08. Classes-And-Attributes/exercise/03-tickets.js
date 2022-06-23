function tickets(arr, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const ticketObj = [];

    arr.forEach((entry) => {
        const [dest, price, status] = entry.split('|');
        ticketObj.push(new Ticket(dest, Number(price), status));
    });

    if (sortingCriterion == 'destination') {
        ticketObj.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        });
    } else if (sortingCriterion == 'status') {
        ticketObj.sort((a, b) => {
            return a.status.localeCompare(b.status);
        });
    } else {
        ticketObj.sort((a, b) => {
            return a.price - b.price;
        });
    }

    return ticketObj;
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));