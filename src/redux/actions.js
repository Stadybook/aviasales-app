import { chipest, fastest, optimal } from './types';

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
