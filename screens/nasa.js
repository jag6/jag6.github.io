import { fetchAPI } from "../helpers/fetch.js";
import { pageTitle } from "../utils.js";

const NASA = {
    render: async () => {
        pageTitle.textContent = 'NASA APOD';
        const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
        const apod = await fetchAPI(url);
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
        `;
    },
    after_render: () => {}
}

export default NASA;