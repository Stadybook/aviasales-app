const getTotalFlyDuration = (ticket) =>
    ticket.segments.map((item) => item.duration).reduce((a, b) => a + b, 0);

const getPriceAndDuration = (ticket) =>
    (ticket.price + getTotalFlyDuration(ticket)) / 2;

export function sortingByPrice(data) {
    return data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
}

export function sortingByDuration(data) {
    return data.sort(
        (a, b) =>
            parseFloat(getTotalFlyDuration(a)) -
            parseFloat(getTotalFlyDuration(b))
    );
}

export function sortingByOptimal(data) {
    return data.sort(
        (a, b) =>
            parseFloat(getPriceAndDuration(a)) -
            parseFloat(getPriceAndDuration(b))
    );
}

export function getActiveFilters(obj) {
    return Object.keys(obj).filter((key) => obj[key] === true);
}

function rewritingArr(arr) {
    const newArr = [];
    if (arr.includes('zero')) {
        newArr.push(0);
    }
    if (arr.includes('one')) {
        newArr.push(1);
    }
    if (arr.includes('two')) {
        newArr.push(2);
    }
    if (arr.includes('three')) {
        newArr.push(3);
    }
    return newArr;
}

const getTotalTransfers = (ticket) =>
    ticket.segments.map((item) => item.stops.length).reduce((a, b) => a + b, 0);

export function filteringByTransfers(ticketData, allFilters, filters) {
    const filtersNumbers = rewritingArr(filters);
    if (!allFilters) {
        return filtersNumbers.includes(getTotalTransfers(ticketData));
    }
    return true;
}
