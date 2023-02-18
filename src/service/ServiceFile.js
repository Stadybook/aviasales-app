/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */

const baseURL = ' https://aviasales-test-api.kata.academy/';
export default class Service {
    async getTicketsInfo(url) {
        const res = await fetch(url);
        if (res.status === 500) {
            this.getTicketsInfo(url);
            // throw new Error('invalid responce', res.status);
        } else if (!res.ok) {
            throw new Error('invalid responce', res.status);
        } else {
            const body = await res.json();
            return body;
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

/*  async getTicketsInfo(url) {
        const res = await fetch(url);
        if (!res.ok) {
            // alert(`Invalid responce ${res.status}. Try to reload website.`);
            throw new Error('invalid responce', res.status);
        }

        const body = await res.json();
        return body;
    } */
