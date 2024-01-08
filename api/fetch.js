export class FetchAPI {
    constructor(url){
        this.url = url;
    }

    static async getWithCorsConfig(url) {
        try {
            const response = await fetch(url, {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            if(!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            const json = await response.json();
            return json;
        } catch(error) {
            console.log(`${error}`);
        }
        return this.url;

    }
    static async getFetch(url) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            if(!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            const json = await response.json();
            return json;
        } catch(error) {
            console.log(`${error}`);
        }
        return this.url;

    }
}