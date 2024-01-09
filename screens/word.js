import topHeader from "../components/topHeader.js";
import { pageTitle } from "../utils.js";

const WOTD = {
    render: async () => {
        pageTitle.textContent = 'Word of the Day';
        return `
            ${topHeader.render('Coming Soon...')}
        `;
    },
    after_render: async () => {}
}

export default WOTD;