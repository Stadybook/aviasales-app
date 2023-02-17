export function sortingByPrice(data) {
    return data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
}

const getTotalFlyDuration = (ticket) =>
    ticket.segments.map((item) => item.duration).reduce((a, b) => a + b, 0);

export function sortingByDuration(data) {
    return data.sort(
        (a, b) =>
            parseFloat(getTotalFlyDuration(a)) -
            parseFloat(getTotalFlyDuration(b))
    );
}

const getTotalTransfers = (ticket) =>
    ticket.segments.map((item) => item.stops.length).reduce((a, b) => a + b, 0);

export function filteringByTransfers(data) {
    return data.filter((a) => getTotalTransfers(a) === 1);
}
