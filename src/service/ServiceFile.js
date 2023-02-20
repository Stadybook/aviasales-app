/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */

const baseURL = ' https://aviasales-test-api.kata.academy/';
export default class Service {
    async getTicketsInfo(url) {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('invalid responce', res.status);
            }
            const body = await res.json();
            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    getSearchId = async () => {
        const body = await this.getTicketsInfo(`${baseURL}search`);
        return body.searchId;
    };

    getInfo = async (searchId) => {
        const url = `${baseURL}tickets?searchId=${searchId}`;
        const body = await this.getTicketsInfo(url);
        return body;
    };
}
