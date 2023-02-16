export const formattingToHours = (mun) => {
    return [Math.floor((mun / 60) % 60)].join(' ').replace(/\b(\d)\b/g, '0$1');
};

export const formattingToMinutes = (mun) => {
    return [Math.floor(mun % 60)].join(' ').replace(/\b(\d)\b/g, '0$1');
};

export const formattingPrice = (price) => {
    const thousands = Math.floor(price / 1000).toString();
    const hundreds = Math.floor(price % 1000).toString();
    const priceString = `${thousands} ${hundreds}`;
    return priceString;
};
