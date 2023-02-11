import { chipest, fastest, optimal, all, zero, one, two, three } from './types';

export function chooseChipest() {
    return {
        type: chipest,
    };
}

export function chooseFastest() {
    return {
        type: fastest,
    };
}

export function chooseOptimal() {
    return {
        type: optimal,
    };
}

export function setAll() {
    return {
        type: all,
    };
}

export function setZero() {
    return {
        type: zero,
    };
}

export function setOne() {
    return {
        type: one,
    };
}

export function setTwo() {
    return {
        type: two,
    };
}

export function setThree() {
    return {
        type: three,
    };
}
