export const formattingToHours = (mun) => {
    return [Math.floor((mun / 60) % 60)].join(' ').replace(/\b(\d)\b/g, '0$1');
};

export const formattingToMinutes = (mun) => {
    return [Math.floor(mun % 60)].join(' ').replace(/\b(\d)\b/g, '0$1');
};

export const formattingPrice = (price) => {
    const thousands = Math.floor(price / 1000).toString();
    const hundredsNumber = Math.floor(price % 1000);
    let hundreds;
    if (hundredsNumber > 100) {
        hundreds = Math.floor(price % 1000).toString();
    } else if (hundredsNumber > 10) {
        hundreds = `0${Math.floor(price % 1000).toString()}`;
    } else {
        hundreds = `00${Math.floor(price % 1000).toString()}`;
    }
    const priceString = `${thousands} ${hundreds}`;
    return priceString;
};
