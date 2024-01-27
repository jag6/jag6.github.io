import { fetchAPI } from "../helpers/fetch.js";
import { NASAIndexedDB, getAllPreviousAPOD } from "../helpers/indexedDB.js";
import { pageTitle } from "../utils.js";

const NASA = {
    render: async () => {
        pageTitle.textContent = 'NASA APOD';
        const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
        const apod = await fetchAPI(url);

        // save to IndexedDB
        const newDate = `${apod.date}`;
        const newTitle = `${apod.title}`;
        const newUrl = `${apod.url}`;
        const newExplanation = `${apod.explanation}`;
        NASAIndexedDB(newUrl, newTitle, newDate, newExplanation);
        
        return `
            <section class="apod">
                ${apod.media_type === 'image'
                    ? `
                        <div><img src="${apod.url}" alt="${apod.title}"></div>
                        <section>
                            <h1>${apod.title}</h1>
                            <small>${apod.date}</small>
                            <div><p>${apod.explanation}</p></div>
                        </section>`
                    : `
                        <div><iframe src="${apod.url}"></iframe></div>
                        <section>
                            <h1>${apod.title}</h1>
                            <small>${apod.date}</small>
                            <div><p>${apod.explanation}</p></div>
                            <a href="${apod.url}">Watch HERE</a>
                        </section>
                    `
                }
            </section> 
            <section class="previous-apod-container">
                <section>
                    <h1>PREVIOUS APODs</h1>
                </section>
                <ul id="previous-apods" class="previous-apods"></ul>
            </section>
        `;
    },
    after_render: () => {
        getAllPreviousAPOD();
    }
}

export default NASA;