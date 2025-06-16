export default class TennisParserApi {
    /**
     * Wrapper for the Tennis Parser API client.
     * This class provides methods to interact with the Tennis Parser API.
     * 
     * @param {{baseUrl: string}} options - Configuration options for the API client
     * @param {string} options.baseUrl - The base URL for the API. Defaults to an empty string.
     * @constructor 
     */
    constructor({ baseUrl = '' } = {}) {
        this.baseUrl = baseUrl;
    }

    /**
     * Fetches the list of tennis rankings from the API.
     * @returns {Promise<Array<{ id: number, lastName: string, firstName: string, age: number }>>} the list of rankings
     * @throws {Error} if the fetch fails or the response is not ok
     */
    async listRankings() {
        const response = await fetch(`${this.baseUrl}/rankings`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.rankings;
    }
};
