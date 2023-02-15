/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */

const baseURL = ' https://aviasales-test-api.kata.academy/';
export default class Service {
    async getTicketsInfo(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('invalid responce', res.status);
        }
        const body = await res.json();
        return body;
    }

    getInfo = async () => {
        const id = await this.getTicketsInfo(`${baseURL}search`);
        const url = `${baseURL}tickets?searchId=${id.searchId}`;
        const body = await this.getTicketsInfo(url);
        return body;
    };
}
