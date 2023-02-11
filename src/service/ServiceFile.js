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

    getSearchId = async () => {
        const url = `${baseURL}search`;
        const body = await this.getTicketsInfo(url);
        return body;
    };

    getTickets = async (searchID) => {
        const url = `${baseURL}tickets?searchId=${searchID}`;
        const body = await this.getTicketsInfo(url);
        return body;
    };

    getInfo = async () => {
        const id = await this.getTicketsInfo(`${baseURL}search`);
        const url = `${baseURL}tickets?searchId=${id.searchId}`;
        const body = await this.getTicketsInfo(url);
        return body;
    };
}
