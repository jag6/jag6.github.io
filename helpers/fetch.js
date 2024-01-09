export const fetchAPI = async (url) => {
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